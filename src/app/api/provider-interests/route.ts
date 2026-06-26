import { insertTable } from '@/lib/api';export async function POST(req: Request){return insertTable('provider_interests', await req.json())}
