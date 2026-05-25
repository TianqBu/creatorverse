# Web Development Project — Creatorverse

Submitted by: **Tianqi Bu**

**Creatorverse** is a full-stack React + Supabase app for cataloguing your favorite content creators. Browse a curated list, view each creator's detail page, and add, edit, or delete entries through a clean card-based interface styled with PicoCSS.

Time spent: **6 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app.**
- [x] **At least five content creators are displayed on the homepage of the app.**
- [x] **Each content creator listed includes their name, a link to their channel/page, and a short description of their content.**
- [x] **API calls use the async/await design pattern via Axios or fetch.**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description.**
- [x] **Each content creator has their own unique URL.**
- [x] **The user can edit a content creator to change their name, url, or description.**
- [x] **The user can delete a content creator.**
- [x] **The user can add a new content creator by entering a name, url, and description.**

## Stretch Features

The following **stretch** features are implemented:

- [x] **Picocss is used to style HTML elements.**
- [x] **Content creator items are displayed in a creative format, like cards instead of a list.**
- [x] **An image of each content creator is shown on their content creator card.**

## Video Walkthrough

Here's a walkthrough of implemented user stories:

📹 **[Watch the full walkthrough on Loom →](https://www.loom.com/share/852b36bf69964290ac04d8f04462b711)**

The walkthrough demonstrates all 9 required features end-to-end in under 2 minutes: list view of all 6 seeded creators, detail page navigation via unique per-creator URL, edit with prefilled form, add new creator with immediate list refresh, and delete with confirmation. See [`docs/VIDEO_SCRIPT.md`](docs/VIDEO_SCRIPT.md) for the scene-by-scene script.

## Notes

Three challenges encountered while building this app:

1. **Supabase row-level security blocked everything by default.** All my initial `.select()` calls returned an empty array with no error, until I disabled RLS on the `creators` table in the Supabase SQL editor. The bundled `supabase/schema.sql` includes the `disable row level security` statement so the next person doesn't waste an hour on it.
2. **Routing the four pages with `react-router-dom` v6.** The v5 `Switch` / `Redirect` patterns are gone — switching to `useRoutes` plus `useNavigate` + `useParams` simplified routing to a single array of route objects in `App.jsx`.
3. **Sharing a form between Add and Edit without stale state.** Reusing `CreatorForm` was clean, but the Edit page initially rendered prefilled values from the previous creator when navigating between IDs. Passing `key={creator.id}` to remount the form on id change fixed it.

## Setup

```bash
git clone https://github.com/TianqBu/creatorverse.git
cd creatorverse
npm install

# Add your Supabase credentials
cp .env.example .env.local
# Edit .env.local with your Project URL and anon public key from
# https://app.supabase.com -> your project -> Settings -> API

npm run dev
```

Then in your Supabase project's **SQL Editor**, run `supabase/schema.sql` once, followed by `supabase/seed.sql` to load six sample creators.

For the full step-by-step submission walkthrough, see [`docs/USER_CHECKLIST.md`](docs/USER_CHECKLIST.md).

## Tech Stack

- **React 18** + **Vite 5** — fast HMR dev server, ES-module build
- **react-router-dom 6** — `useRoutes`, `useParams`, `useNavigate`
- **@supabase/supabase-js 2** — `from('creators').select() / .insert() / .update() / .delete()`
- **@picocss/pico 2** — semantic CSS framework + custom dark-mode theme on top

## License

```
Copyright 2026 Tianqi Bu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
