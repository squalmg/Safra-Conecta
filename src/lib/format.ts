export function formatMoney(value?: number | null, currency = 'BRL') { return typeof value === 'number' ? new Intl.NumberFormat('pt-BR',{style:'currency',currency}).format(value) : '—'; }
export function formatDate(value?: string | null) { return value ? new Intl.DateTimeFormat('pt-BR',{timeZone:'UTC'}).format(new Date(value)) : '—'; }
export function onlyDigits(value = '') { return value.replace(/\D/g, ''); }
export function formatPhone(value?: string | null) { const d = onlyDigits(value ?? ''); return d ? `+${d}` : '—'; }
