import { listTable, insertTable } from '@/lib/api';
export async function GET(){return listTable('machines')}
export async function POST(req: Request){return insertTable('machines', await req.json())}
