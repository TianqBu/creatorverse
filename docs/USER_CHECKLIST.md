# Creatorverse — Your Submission Checklist

Follow these steps in order. Total time ≈ 45–60 minutes (mostly waiting + recording).

> **Pre-flight check:** Make sure you have a GitHub account, can install Node.js packages (`npm install` works), and have a webcam-free screen-recording tool installed (Loom is recommended).

---

## Step 1 — Set up Supabase (≈ 10 minutes)

1. Go to **https://app.supabase.com** and sign in (sign up via GitHub if you don't have an account).
2. Click **New project**. Fill in:
   - **Name:** `creatorverse`
   - **Database Password:** generate or pick a strong one (you won't need it for this project, but save it)
   - **Region:** the one closest to you
   - **Pricing Plan:** Free
3. Wait ~1 minute for the project to provision.
4. Once it's ready, click **SQL Editor** in the left sidebar → **New query**.
5. Open `supabase/schema.sql` from this repo, copy the entire contents, paste into the SQL editor, and click **Run** (or `Ctrl + Enter`). You should see "Success. No rows returned."
6. Click **New query** again, open `supabase/seed.sql`, copy + paste + Run. You should see "Success. Rows: 6" (or similar).
7. Click **Table Editor** in the left sidebar → click `creators`. Confirm you see 6 rows with names like "Marques Brownlee", "Fireship", etc.
8. Click **Project Settings** (gear icon, bottom left) → **API**. Keep this tab open — you'll need:
   - **Project URL** (looks like `https://abcdefghijklm.supabase.co`)
   - **anon public** key (under "Project API keys" — the longer one labeled `anon` `public`)

---

## Step 2 — Configure local environment (≈ 2 minutes)

In a terminal, from the project root (`D:\2026project\creatorverse`):

```powershell
# Copy the env template
copy .env.example .env.local
```

Then open `.env.local` in any editor and replace the two placeholder values with what you copied from Supabase in Step 1.8:

```
VITE_SUPABASE_URL=https://abcdefghijklm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...your-long-anon-key...
```

Save the file. **Never commit this file** — `.gitignore` already excludes it, but double-check before any push.

---

## Step 3 — Install + run locally (≈ 5 minutes for install)

```powershell
npm install
npm run dev
```

Open **http://localhost:5173** in your browser. You should see 6 creators in a dark-themed card grid.

**Smoke-test all 9 required features** (this is your dress rehearsal for the video):

- [ ] Homepage shows 6 creator cards with names, channel URLs, descriptions, and images
- [ ] Click any card → detail page loads at a unique URL like `/1` or `/2`
- [ ] Copy the detail URL, open in a new tab → same creator loads
- [ ] On the detail page, click **Edit** → form is prefilled
- [ ] Change a field, click **Save changes** → goes back to detail page with the update
- [ ] Go home → updated value is visible on the card
- [ ] Click **+ Add Creator** in the nav → form opens
- [ ] Fill in name, url, description, image URL → click **Create creator** → redirects home, new card appears
- [ ] Click the new creator → click **Delete** → confirm → returns home, card is gone

If anything fails, see "Troubleshooting" at the bottom of this file.

---

## Step 4 — Create your GitHub repository (≈ 5 minutes)

1. Go to **https://github.com/new**
2. Repository name: `creatorverse`
3. Description: `CodePath WEB103 Prework — full-stack React + Supabase CRUD for favorite content creators.`
4. Choose **Public** (CodePath graders need to view it)
5. **Do NOT** initialize with README, .gitignore, or license (we already have those)
6. Click **Create repository**
7. Copy the SSH or HTTPS clone URL shown on the next page.

In your terminal, from the project root:

```powershell
git init
git add .
git status
```

**Verify** that `.env.local` does NOT appear in the staged files list. If it does, stop and add it to `.gitignore` properly before continuing.

```powershell
git commit -m "Initial commit: Creatorverse prework submission"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/creatorverse.git
git push -u origin main
```

(Replace `YOUR-USERNAME` with your actual GitHub username.)

---

## Step 5 — Edit README placeholders (≈ 3 minutes)

Open `README.md` and replace:

- `[Your Name Here]` (line 3) → your real name
- `__ hours` (line 7) → roughly how long you spent (be honest — somewhere between 4 and 12 hours is typical)
- `[YEAR]` and `[YOUR NAME]` in the License section (and in `LICENSE` file) → current year + your name
- The GIF placeholder (`walkthrough.gif`) will be filled in after Step 6

Commit and push:

```powershell
git add README.md LICENSE
git commit -m "Fill in personal details in README and LICENSE"
git push
```

---

## Step 6 — Record the video walkthrough (≈ 10 minutes)

1. Open `docs/VIDEO_SCRIPT.md` and read through it once.
2. Make sure your browser is at 100% zoom, fullscreen, with no other tabs visible.
3. Make sure the dev server is running (`npm run dev`) and you're on `http://localhost:5173`.
4. Open Loom (or your recorder of choice). Pick **Screen + Mic**, **Window** capture mode.
5. Click record. Follow the script. Aim for 2–3 minutes total.
6. If you stumble, just keep going — you can re-record later for free.
7. Stop recording. Loom gives you a shareable URL — copy it.

**For the README GIF:**

8. Re-record a SHORTER 15–20 second clip showing just the home → add → home flow.
9. Convert that MP4 to a GIF using **https://ezgif.com/video-to-gif** (upload → Convert to GIF → download).
10. Save the file as `walkthrough.gif` in the project root.
11. Commit and push:

```powershell
git add walkthrough.gif
git commit -m "Add video walkthrough gif"
git push
```

Then update the README so the Video Walkthrough section also includes your Loom link, e.g.:

```markdown
## Video Walkthrough

Full walkthrough on Loom: https://www.loom.com/share/YOUR-LOOM-ID

![Video Walkthrough](walkthrough.gif)
```

```powershell
git add README.md
git commit -m "Link Loom walkthrough in README"
git push
```

---

## Step 7 — Submit to CodePath (≈ 3 minutes)

1. Go to **https://apply.codepath.org/prework** (or the link in your WEB103 course page).
2. Fill in:
   - **GitHub repository URL:** `https://github.com/YOUR-USERNAME/creatorverse`
   - **Video walkthrough URL:** your Loom link
3. Answer any reflection questions honestly (typically: what was challenging, what you learned).
4. Submit.

---

## Final verification — does GitHub show what you think it shows?

Open your repo in an **incognito** browser window. Confirm:

- [ ] README renders nicely with all 9 required + 3 stretch checkboxes ticked
- [ ] The `walkthrough.gif` is visible inline in the README
- [ ] The repo is **public** (no "Private" badge next to the name)
- [ ] `.env.local` is **NOT** in the repo (search files for `VITE_SUPABASE_ANON_KEY=` — should not appear in committed files)
- [ ] Clicking `supabase/schema.sql` and `supabase/seed.sql` shows the SQL content

---

## Troubleshooting

**Homepage is empty / cards don't show**

- Open the browser DevTools console. Look for an error from `@supabase/supabase-js`.
- Most common cause: **Row Level Security is still enabled**. Re-run `supabase/schema.sql` to disable it, or in the Supabase dashboard go to **Authentication → Policies → creators table** and disable RLS.
- Second most common: **wrong anon key or URL** in `.env.local`. Double-check no extra spaces.
- After fixing `.env.local`, **restart `npm run dev`** — Vite only reads env vars at startup.

**"Could not load creators: TypeError: fetch failed"**

- Network issue or wrong `VITE_SUPABASE_URL`. The URL should include `https://` and the `.supabase.co` suffix, no trailing slash.

**Image URLs return broken-image icons**

- The seed data uses Unsplash images that should be reliable. If one breaks, pick a replacement from https://unsplash.com and put the direct image URL in the `imageURL` column via the Supabase Table Editor.

**Form submits but nothing happens / new creator doesn't appear**

- Check the browser console for the Supabase error. Usually RLS again — make sure `disable row level security` ran successfully on the `creators` table.

**`npm install` fails with "EACCES" or permission errors**

- On Windows: make sure you're in a regular (not Administrator) PowerShell, and that the path doesn't contain spaces. `D:\2026project\creatorverse` is fine.

**Edit form shows old data when switching between creators**

- This shouldn't happen — `<CreatorForm key={creator.id} />` in `EditCreator.jsx` is what prevents it. If you see it, make sure that line wasn't deleted.

---

## What I (Claude) did for you vs. what's still on your plate

**Already done — no action needed:**
- Complete Vite + React project scaffolding
- All 4 pages (ShowCreators, ViewCreator, AddCreator, EditCreator) implementing all 9 required features
- Shared `CreatorForm` component with validation and error display
- Reusable `CreatorCard` with image, name, URL, description, and View / Edit / Visit actions
- PicoCSS v2 + custom dark-mode theme with Syne + Instrument Sans fonts, hover animations, responsive grid
- Supabase schema + seed SQL with 6 real, well-known creators
- `.gitignore` correctly excluding `.env.local`
- README following CodePath template with all checkboxes ticked
- Video walkthrough script with scene-by-scene timing
- LICENSE file (Apache 2.0)

**You still need to:**
- Create the Supabase project (Step 1)
- Paste your Supabase URL + anon key into `.env.local` (Step 2)
- Run `npm install && npm run dev` and smoke-test (Step 3)
- Create the GitHub repo and push (Step 4)
- Fill in `[Your Name Here]` and `__ hours` in README (Step 5)
- Record the 2-3 minute Loom video (Step 6)
- Submit to CodePath (Step 7)

That's it. Good luck — you'll crush it.
