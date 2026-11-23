export const businessTypes = ['Analiza polițelor existente', 'Bunuri și echipamente', 'Răspundere civilă / profesională', 'Flote auto', 'Sănătate pentru angajați', 'Întreruperea activității', 'Riscuri cibernetice', 'Asigurări agricole', 'Nu știu încă ce mi se potrivește'];
export const personalTypes = ['RCA', 'CASCO', 'Locuință', 'Călătorie', 'Sănătate', 'Viață', 'Accidente', 'Răspundere civilă', 'Nu știu încă ce mi se potrivește'];
export const privacyVersion = '2026-11-23';

export function resolveContactType(audience, value = '', reason = '') {
  if (audience === 'business' && reason === 'analiza') return businessTypes[0];
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const wanted = normalize(value);
  if (!wanted) return '';
  const options = audience === 'personal' ? personalTypes : businessTypes;
  return options.find(option => normalize(option) === wanted)
    || options.find(option => normalize(option).includes(wanted) || wanted.includes(normalize(option)))
    || (wanted.includes('raspundere') ? (audience === 'business' ? 'Răspundere civilă / profesională' : 'Răspundere civilă') : '');
}
