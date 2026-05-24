-- Creatorverse - six sample creators to seed the table.
-- Run this AFTER schema.sql.
-- NOTE: kept to pure ASCII to avoid em-dash / smart-quote issues
-- when pasting into the Supabase SQL editor.

insert into creators (name, url, description, "imageURL") values
  (
    'Marques Brownlee',
    'https://www.youtube.com/@mkbhd',
    'MKBHD makes some of the most polished tech reviews on the internet. The gold standard for solo creator production quality.',
    'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=80'
  ),
  (
    'Fireship',
    'https://www.youtube.com/@Fireship',
    'Fast-paced 100-second explainers of new web tech. Jeff Delaney has a gift for cramming an entire framework into 90 seconds.',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80'
  ),
  (
    'Hank Green',
    'https://www.youtube.com/@hankschannel',
    'One half of the Vlogbrothers and the host of SciShow. Hanks warmth toward both science and the people learning it is genuinely contagious.',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80'
  ),
  (
    'Theo - t3.gg',
    'https://www.youtube.com/@t3dotgg',
    'Theo Browne breaks down full-stack TypeScript news with strong opinions and a healthy dose of debate. The best place to find out what frontend developers are arguing about this week.',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80'
  ),
  (
    'Acquired',
    'https://www.acquired.fm/',
    'Ben Gilbert and David Rosenthal produce the deepest company-history podcast on the internet, with three to four hour episodes on names like NVIDIA, Costco, and LVMH.',
    'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80'
  ),
  (
    'Wendover Productions',
    'https://www.youtube.com/@Wendoverproductions',
    'Sam Denby explains the hidden logistics of the world such as airlines, shipping, and postal services with maps, charts, and a calm narration that turns boring topics into addictive viewing.',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80'
  );
