import { onlyDigits } from './format';
const fallback = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5564999999999';
export function sanitizeWhatsApp(phone?: string | null) { const digits = onlyDigits(phone || fallback); if (!digits) return ''; return digits.startsWith('55') ? digits : `55${digits}`; }
export function whatsappLink(phone: string | undefined | null, message: string) { return `https://wa.me/${sanitizeWhatsApp(phone)}?text=${encodeURIComponent(message)}`; }
export function newRequestMessage(data: {name:string; city:string; state:string; service_type:string; crop?:string; area_amount?:string|number}) { return `Olá, sou ${data.name}. Quero solicitar ${data.service_type} em ${data.city}/${data.state}${data.crop ? ` para ${data.crop}` : ''}${data.area_amount ? ` em ${data.area_amount} ha` : ''}.`; }
export function newMachineMessage(data: {name:string; machine_type:string; city:string; state:string}) { return `Olá, sou ${data.name}. Quero cadastrar minha máquina (${data.machine_type}) para atender em ${data.city}/${data.state}.`; }
export function adminProducerMessage(name: string) { return `Olá, ${name}! Aqui é a equipe SafraConecta. Vamos acompanhar sua solicitação de máquina.`; }
export function adminProviderMessage(name: string) { return `Olá, ${name}! Aqui é a equipe SafraConecta. Temos oportunidades para suas máquinas.`; }
export function providerInterestMessage(service: string) { return `Olá! Tenho interesse em atender a oportunidade de ${service} publicada na SafraConecta.`; }
