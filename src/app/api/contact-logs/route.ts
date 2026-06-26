import { insertTable } from '@/lib/api';export async function POST(req: Request){return insertTable('contact_logs', await req.json())}
