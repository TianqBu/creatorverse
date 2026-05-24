-- Creatorverse — schema for the `creators` table.
-- Run this in the Supabase SQL editor BEFORE the app first loads.
-- (Dashboard -> SQL Editor -> New query -> paste -> Run.)

create table if not exists creators (
  id bigint generated always as identity primary key,
  created_at timestamptz default now() not null,
  name text not null,
  url text not null,
  description text,
  "imageURL" text
);

-- For the prework, disable Row Level Security so the public anon key can
-- read and write to this table directly from the browser client.
-- (Production apps would instead define explicit policies.)
alter table creators disable row level security;

-- Enable realtime so changes from one tab sync to others.
-- This is optional but matches the CodePath setup instructions.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'creators'
  ) then
    alter publication supabase_realtime add table creators;
  end if;
end $$;
