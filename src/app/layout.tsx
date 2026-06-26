import type { Metadata } from 'next'; import './globals.css';
export const metadata: Metadata = { title:'SafraConecta', description:'Máquinas e serviços agrícolas sob demanda para a sua safra.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
