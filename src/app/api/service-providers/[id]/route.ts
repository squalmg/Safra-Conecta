import { patchTable } from '@/lib/api';
export async function PATCH(req: Request,{params}:{params:Promise<{id:string}>}){return patchTable('service_providers',(await params).id,await req.json())}
