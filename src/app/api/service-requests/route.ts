import { listTable, insertTable } from '@/lib/api';
export async function GET(){return listTable('service_requests')}
export async function POST(req: Request){return insertTable('service_requests', await req.json())}
