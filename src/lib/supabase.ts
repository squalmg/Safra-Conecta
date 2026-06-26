import { createClient } from '@supabase/supabase-js';
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
export function hasSupabase() { return Boolean(url && (anon || service)); }
export function getSupabaseServer() { if (!url || !(service || anon)) return null; return createClient(url, service || anon!, { auth: { persistSession: false } }); }
