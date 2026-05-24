import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!URL || !KEY) {
  console.warn(
    '[Creatorverse] Missing Supabase env vars. ' +
      'Copy .env.example to .env.local and add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
  )
}

export const supabase = createClient(URL ?? '', KEY ?? '')
