# Registrul privat IlyAsig

Formularul trimite către `/api/contact` pe Vercel. Ruta validează datele și semnează cererea cu HMAC SHA-256. Apps Script verifică semnătura, înregistrează cererea o singură dată în Google Sheets și apoi notifică adresa configurată. Nu trimite emailuri clienților.

## Activare

1. Creează un proiect Apps Script în contul Google care deține registrul. Adaugă `Code.gs` și manifestul `appsscript.json` din acest director.
2. În Project Settings, adaugă Script Properties:
   - `SPREADSHEET_ID`: ID-ul registrului privat. Foaia trebuie să se numească `Cereri` și să aibă antetele din `HEADERS`.
   - `NOTIFICATION_EMAIL`: adresa proprietarului, verificată înainte de activare.
   - `CONTACT_SHARED_SECRET`: o valoare aleatorie de minimum 32 de caractere, generată securizat. Nu o salva în Git sau într-o variabilă publică.
3. Rulează `setup` din editor. Proprietarul autorizează accesul la foi, trimiterea emailurilor și instalarea declanșatorului de reîncercare. Funcția verifică antetele și instalează o singură reîncercare la fiecare 5 minute.
4. Deploy > New deployment > Web app: executare ca proprietar, acces pentru Anyone. Publicul poate doar apela endpointul; codul cere o semnătură validă și nu oferă o rută pentru citirea registrului.
5. În proiectul Vercel corect, configurează pentru Production, ca secrete:
   - `CONTACT_GOOGLE_SCRIPT_URL`: URL-ul `/exec` întors de deploy.
   - `CONTACT_SHARED_SECRET`: aceeași valoare din Script Properties.
6. Publică versiunea din GitHub sau redeployează după configurare. Nu conecta previzualizările la datele de producție.
7. Trimite o cerere marcată explicit drept TEST din formular. Verifică înregistrarea în Sheets, coloana `Notificare email` și primirea mesajului în inbox. Reîncercarea aceleiași cereri trebuie să lase un singur rând.

Până când sunt configurate ambele secrete, formularul păstrează modul de pregătire/copiere/descărcare și nu pretinde că a trimis cererea.

## Folosire

Registrul rămâne privat. Coloanele `Status` și `Observații` se pot modifica manual. Export: Google Sheets > Fișier > Descarcă > Microsoft Excel sau CSV. `Amprentă cerere` este o coloană tehnică ascunsă, folosită împotriva duplicatelor; nu o șterge.

Notificările eșuate rămân `În așteptare`. După opt încercări sunt marcate `De verificat`; după rezolvarea problemei pot fi repuse manual `În așteptare`, cu `Încercări email` resetat la 0. O întrerupere exact după acceptarea emailului poate produce o notificare repetată; identificatorul cererii rămâne același.

Apps Script limitează cererile noi la 5 pentru aceeași amprentă de rețea într-un interval scurt, prin cache. Este o protecție de bază pentru un experiment cu volum redus, nu un serviciu anti-abuz distribuit. Nu se stochează adresa IP brută în registru. Pentru trafic ridicat, adaugă protecție dedicată înaintea formularului.

Rulează verificările locale cu `node --test tests/*.test.mjs` și `npm run build`. Testele folosesc exclusiv date fictive și un serviciu Google simulat; verificarea reală necesită activarea contului Google și a setărilor Vercel.
