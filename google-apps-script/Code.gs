/* IlyAsig: private registry + owner email notifications.
 * Script Properties: SPREADSHEET_ID, NOTIFICATION_EMAIL, CONTACT_SHARED_SECRET.
 * Deploy as a Web App executing as the owner. Requests require an HMAC.
 */
var HEADERS = ['ID cerere', 'Data și ora', 'Tip client', 'Nume', 'Firmă / activitate', 'Telefon', 'Email', 'Localitate', 'Asigurare solicitată', 'Reînnoire', 'Mesaj', 'Status', 'Observații', 'Notificare email', 'Ultima încercare', 'Încercări email', 'Acord contact', 'Amprentă cerere'];

function output_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function configuration_() {
  var props = PropertiesService.getScriptProperties().getProperties();
  if (!props.SPREADSHEET_ID || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(props.NOTIFICATION_EMAIL || '') || (props.CONTACT_SHARED_SECRET || '').length < 32) throw new Error('configuration');
  return props;
}

function registry_(props) {
  var sheet = SpreadsheetApp.openById(props.SPREADSHEET_ID).getSheetByName('Cereri');
  if (!sheet || JSON.stringify(sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0]) !== JSON.stringify(HEADERS)) throw new Error('headers');
  return sheet;
}

function equal_(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  var mismatch = 0;
  for (var i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

function digest_(value) {
  return Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8)).replace(/=+$/, '');
}

function authenticate_(envelope, props) {
  if (!envelope || typeof envelope.payload !== 'string' || envelope.payload.length > 12000 || !Number.isSafeInteger(envelope.issuedAt) || Math.abs(Date.now() - envelope.issuedAt) > 300000) throw new Error('authentication');
  var expected = Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(String(envelope.issuedAt) + '.' + envelope.payload, props.CONTACT_SHARED_SECRET, Utilities.Charset.UTF_8)).replace(/=+$/, '');
  if (!equal_(envelope.signature, expected)) throw new Error('authentication');
  return JSON.parse(envelope.payload);
}

function safeCell_(value) {
  var text = String(value || '');
  // Keep user text literal in Sheets and subsequent CSV exports.
  return /^[\s\u200b]*[=+@-]/.test(text) ? '\u200b' + text : text;
}

function findRequest_(sheet, id) {
  var count = sheet.getLastRow() - 1;
  if (count < 1) return null;
  return sheet.getRange(2, 1, count, 1).createTextFinder(id).matchEntireCell(true).useRegularExpression(false).findNext();
}

function doGet() { return output_({ service: 'IlyAsig', version: 1 }); }

function doPost(event) {
  var lock;
  try {
    if (!event || !event.postData || event.postData.contents.length > 20000) return output_({ ok: false, code: 'invalid' });
    var props = configuration_();
    var payload = authenticate_(JSON.parse(event.postData.contents), props);
    if (payload.action === 'health') { registry_(props); return output_({ ok: true, ready: true }); }
    var data = payload.data;
    if (payload.action !== 'submit' || !data || !/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(data.requestId || '') || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(data.email || '') || !['business', 'personal'].includes(data.audience) || data.consent !== 'accepted' || !/^[\da-f]{64}$/.test(payload.clientHash || '')) return output_({ ok: false, code: 'invalid' });
    lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) return output_({ ok: false, code: 'busy' });
    var sheet = registry_(props);
    var fingerprint = digest_(JSON.stringify(data));
    var existing = findRequest_(sheet, data.requestId);
    var row;
    if (existing) {
      row = existing.getRow();
      if (!equal_(String(sheet.getRange(row, 18).getValue()), fingerprint)) return output_({ ok: false, code: 'id_conflict' });
    } else {
      var cache = CacheService.getScriptCache();
      var rateKey = 'rate:' + payload.clientHash;
      var count = Number(cache.get(rateKey) || 0);
      if (count >= 5) return output_({ ok: false, code: 'rate_limited' });
      cache.put(rateKey, String(count + 1), 600);
      row = sheet.getLastRow() + 1;
      if (row > sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(), 1000);
      sheet.getRange(row, 1, 1, HEADERS.length).setValues([[
        data.requestId, new Date(), data.audience === 'business' ? 'Firmă' : 'Persoană fizică',
        safeCell_(data.name), safeCell_(data.business), safeCell_(data.phone), safeCell_(data.email), safeCell_(data.city), safeCell_(data.insuranceType), safeCell_(data.renewal), safeCell_(data.message),
        'Nouă', '', 'În așteptare', '', 0, 'Acceptat · ' + data.privacyVersion, fingerprint
      ]]);
      SpreadsheetApp.flush();
    }
    // The stored request is authoritative. Email errors never roll it back.
    try { notifyRow_(sheet, row, props); } catch (_) { /* Retried by the private trigger. */ }
    return output_({ ok: true, stored: true, requestId: data.requestId });
  } catch (_) { return output_({ ok: false, code: 'unavailable' }); }
  finally { if (lock && lock.hasLock()) lock.releaseLock(); }
}

function notifyRow_(sheet, row, props) {
  var values = sheet.getRange(row, 1, 1, HEADERS.length).getValues()[0];
  if (values[13] === 'Trimisă' || values[13] === 'De verificat') return;
  var attempts = Number(values[15] || 0);
  if (attempts >= 8) { sheet.getRange(row, 14).setValue('De verificat'); return; }
  if (MailApp.getRemainingDailyQuota() < 1) return;
  sheet.getRange(row, 15, 1, 2).setValues([[new Date(), attempts + 1]]);
  var text = ['Ai primit o cerere nouă pe IlyAsig.', '', 'ID: ' + values[0], 'Data: ' + Utilities.formatDate(values[1], 'Europe/Bucharest', 'dd.MM.yyyy HH:mm'), 'Pentru: ' + values[2], 'Nume: ' + values[3], 'Firmă / activitate: ' + values[4], 'Telefon: ' + values[5], 'Email: ' + values[6], 'Localitate: ' + values[7], 'Interes: ' + values[8], 'Reînnoire: ' + values[9], '', 'Mesaj:', String(values[10] || '-'), '', 'Registru privat:', 'https://docs.google.com/spreadsheets/d/' + props.SPREADSHEET_ID + '/edit#gid=' + sheet.getSheetId()].join('\n');
  MailApp.sendEmail({ to: props.NOTIFICATION_EMAIL, subject: 'Cerere nouă IlyAsig — ' + String(values[8]).replace(/[\r\n]/g, ' ') + ' [' + values[0].slice(0, 8) + ']', body: text, name: 'IlyAsig', replyTo: String(values[6]).replace(/^\u200b/, '') });
  sheet.getRange(row, 14).setValue('Trimisă');
  SpreadsheetApp.flush();
}

function retryPendingNotifications() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    var props = configuration_();
    var sheet = registry_(props);
    var last = sheet.getLastRow();
    if (last < 2) return;
    var rows = sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
    var tried = 0;
    for (var i = 0; i < rows.length && tried < 10; i++) {
      if (rows[i][0] && rows[i][13] === 'În așteptare') {
        tried++;
        try { notifyRow_(sheet, i + 2, props); } catch (_) { /* Keep pending for the next run. */ }
      }
    }
  } finally { lock.releaseLock(); }
}

function setup() {
  var props = configuration_();
  registry_(props);
  MailApp.getRemainingDailyQuota();
  if (!ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'retryPendingNotifications'; })) {
    ScriptApp.newTrigger('retryPendingNotifications').timeBased().everyMinutes(5).create();
  }
  console.log('Registrul și notificările sunt configurate.');
}
