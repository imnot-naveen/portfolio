# Naveen Harinda’s portfolio

A text-first portfolio for my software projects, research, timeline, and writing. The site uses plain HTML, CSS, and a small JavaScript filter for the project list.

## Preview locally

Serve the repository from its root with Python.

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 for the homepage or http://127.0.0.1:8000/blogs/ for the full blog index.

## Edit the site

- `index.html` contains the project cards, timeline, and the first three blog previews. A card’s space-separated `data-category` values determine which filters include it.
- `blogs/index.html` contains the full blog index. Individual posts live in their own subfolders. When adding a post, update the blog index and add a dated `timeline-entry` on the homepage. Link project posts from their project page as well.
- `projects/` contains the individual project pages. The in-progress pages share the construction watermark in `assets/`.
- `assets/site.css` holds the shared styles, and `assets/project-filter.js` handles filtering. All projects remain visible without JavaScript.
- `assets/fonts/` contains the self-hosted Bricolage Grotesque and IBM Plex Mono fonts and their licenses.
