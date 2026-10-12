# The Pilates Place — sample landing page

**This is a sample design, not the business's official website.** Every page shows a small fixed "Sample design" label and carries `<meta name="robots" content="noindex, nofollow">` so search engines don't index it.

## What's in this folder

```
index.html   page markup (all sections, nav anchors)
style.css    site styles (desktop first, mobile breakpoint at 900px)
base.css     shared basics: smooth scrolling, mobile menu icon, "Sample design" label
main.js      tiny script: mobile menu, toggle chips/tabs, demo forms
img/         locally stored stock photos (credits below)
```

Plain HTML/CSS/JS, no build step, and every asset path is relative. Open `index.html` in a browser or upload the whole folder as-is to any static host. Fonts come from Google Fonts; if they can't load, the page falls back to system fonts.

Placeholder behaviour: cart/"Add"/"Book" buttons scroll to the matching section. The area-check form (if there is one) shows a "not connected yet" note. Nothing is sent anywhere. Before going live, swap in the real menu, links, WhatsApp number and booking/checkout URLs.

## Pointing a custom domain at it

1. **Pick a static host** and upload this folder as the site root, so `index.html` sits at the top level. Options:
   - **Netlify:** drag the folder onto app.netlify.com/drop, or create a site from a Git repo with no build command and publish directory `/`.
   - **Cloudflare Pages:** create a project, then choose "Direct upload" (or connect Git) with no build command.
   - **GitHub Pages:** push the files to a repo, then go to Settings → Pages → deploy from branch `main` / root.
   - **Vercel:** import the folder or repo and use the "Other" framework preset with no build command.
2. **Add the domain in the host's dashboard**, e.g. `www.example.com` plus the bare `example.com`.
3. **Create DNS records at your domain registrar** using the values the host gives you. Usually that's:
   - `www`: a **CNAME** to the host's address (e.g. `your-site.netlify.app`, `your-site.pages.dev`, `username.github.io`, `cname.vercel-dns.com`).
   - Bare/apex domain: an **A/ALIAS/ANAME** record, or the host's own nameservers, as the host tells you.
4. **Wait for DNS to propagate**, from a few minutes up to 24 hours. Then turn on HTTPS: most hosts issue a free certificate automatically. Set a redirect so the bare domain and `www` resolve to one address.
5. **When it becomes the real site**, remove the `noindex` meta tag and the `.sample-note` element in `index.html`.

## Image credits

All photos are free-to-use stock photos from **Pexels** (Pexels License: free for commercial use, no attribution required, credited here anyway). They were downloaded and stored locally in `img/`, so nothing is hot-linked.

| File | Photographer | Source | Replaces mockup image |
|---|---|---|---|
| `img/hero.jpg` | Pavel Danilyuk | https://www.pexels.com/photo/pregnant-woman-doing-yoga-7055676/ | `pn1.jpg` |
| `img/prenatal.jpg` | Pavel Danilyuk | https://www.pexels.com/photo/a-pregnant-woman-doing-yoga-7055646/ | `ws4.jpg` |

The designer's mockup used Openverse (StockSnap/rawpixel/CC) images from `web-mockups/assets/`. All of them were replaced with the Pexels photos above for consistent, clear licensing. No images from the business's Instagram are used.
