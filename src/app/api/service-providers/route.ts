import { listTable, insertTable } from '@/lib/api';
export async function GET(){return listTable('service_providers')}
export async function POST(req: Request){return insertTable('service_providers', await req.json())}
