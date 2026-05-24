# Creatorverse — Video Walkthrough Script

**Target length:** 2–3 minutes
**Format:** Loom screen recording (window capture, browser only)
**Resolution:** 1080p, browser zoom 100%

This script covers every one of the 9 required features and the 3 stretch features in order. Follow it once on a dry run, then hit record.

---

## Scene-by-Scene

| Time | Action on screen | What to say |
|------|------------------|-------------|
| 0:00–0:12 | Home page (`/`). Slow scroll showing all creator cards in the dark-themed grid. | "This is Creatorverse — a React + Supabase app I built for the CodePath WEB103 prework. The homepage pulls a list of my favorite content creators live from a Supabase database. There are six of them here." *(covers required feature 2 — display ≥5 creators)* |
| 0:12–0:22 | Hover over a card. Point out the name, image, channel URL underneath, and description text. | "Each card shows the creator's name, an image, their channel URL, and a short description of what they make." *(covers required feature 3 — name + URL + description, and stretch features S2 & S3 — card format & image)* |
| 0:22–0:35 | Click on a card to navigate to the detail page (`/:id`). Pause on the detail view. | "Clicking the card takes me to a dedicated detail page for that creator at its own unique URL — notice the path changes to slash and the creator's id. The detail view shows the full name, the clickable channel link, and the longer description." *(covers required features 5 & 6 — detail page + unique URL)* |
| 0:35–0:45 | Copy the URL from the address bar, open a new tab, paste it. Same creator loads. | "And because each creator has a unique URL, I can share it or refresh the page and the right creator loads back up." |
| 0:45–1:00 | Click the **Edit** button on the detail page. Show the prefilled form. Change the description slightly. Click **Save changes**. | "Edit pulls up a form prefilled with the existing values. I'll tweak the description a bit — and save. That fires an async update through Supabase using await." *(covers required feature 7 — edit + feature 4 — async/await)* |
| 1:00–1:10 | Land back on the detail page; the updated description is visible. Navigate back to home, see card reflects change. | "I'm back on the detail page with the new description, and on the home page the card also shows the update — because each page re-fetches on mount." |
| 1:10–1:30 | Click **+ Add Creator** in the nav. Fill out the form: name, URL, description, image URL. Submit. | "Now I'll add a brand new creator. Name, channel URL, a short description, and an image URL. Submit." *(covers required feature 9 — add new)* |
| 1:30–1:40 | Land on home page, new card appears at the end of the list. | "Redirected back to the home page, and the new creator is showing in the grid — no refresh needed." |
| 1:40–1:55 | Click the newly-added creator. On the detail page, click **Delete**. Confirm in the browser prompt. | "Finally, delete. I'll go into the new creator's detail page and hit Delete — confirm — and Supabase removes the row." *(covers required feature 8 — delete)* |
| 1:55–2:05 | Land back on home page; the card is gone. | "Back to the home page and the creator is gone from the list. That's all nine required features and all three stretch features — cards, PicoCSS theming, and per-creator images." *(closes out feature 1 — logical component structure + stretch S1 — PicoCSS)* |
| 2:05–2:15 | Slow scroll through the grid one more time. End recording. | "Thanks for watching." |

---

## Recording Tips

### Recommended tool
**[Loom](https://www.loom.com/)** — free tier supports up to 5-minute recordings at 1080p. Use **Window** capture mode pointed at your browser only, not your full desktop.

### Before you hit record
- Set browser zoom to **100%** (Ctrl+0 / Cmd+0)
- Use a maximized browser window at 1920×1080
- Make sure the database has **at least 6 creators** seeded (run `supabase/seed.sql`)
- Close all other tabs, notifications, and Slack/Discord popups
- Do a full dry run of the script once — the real take should feel practiced
- Have one valid image URL ready to paste during the "add creator" scene

### What NOT to show
- Your `.env.local` file or any terminal window displaying environment variables
- The Supabase dashboard with your anon key visible
- The browser DevTools console (close it before recording)
- Any error states or 404 pages from mistyped routes
- Your file explorer or code editor

### Audio
- Record in a quiet room or use a headset mic — laptop mics pick up keyboard noise
- Speak at a measured pace; 2 minutes of script at normal speed runs about 2:20
- If you stumble on a line, pause 2 seconds and re-say it — easy to cut in editing

### File delivery
- Export from Loom as **MP4** for the video submission link in the README
- For the README `walkthrough.gif`: record a short 15–20 second clip of the home → add → list flow and convert with [LICEcap](https://www.cockos.com/licecap/) (Windows) or [ezgif.com](https://ezgif.com/video-to-gif), then commit `walkthrough.gif` to the repo root
