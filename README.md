# curtistarr.github.io

## Running

- `npm install`
- `npm run dev` - Starts a local web server with HMR for development
- `npm run build` - Build and output to `./dist`
- `npm run preview` - Starts a local web server that serves the built solution from `./dist`

## Adding New Blog Posts

Posts are markdown files in `src/posts/`. The file name (minus `.md`) becomes the URL slug, e.g. `src/posts/hello-world.md` is served at `/#/posts/hello-world`. Posts are loaded at build time via `import.meta.glob`, so adding a file is enough — no index to update.

Each post starts with a YAML-style frontmatter block:

```markdown
---
title: My new post
date: 2026-04-28
summary: A one-line summary shown on the home feed.
---

# Body starts here

Write the post in standard markdown.
```

The home feed sorts posts by `date` (newest first).

## Adding New Social Links

Sidebar social links live in `src/assets/links.json`. Each entry has `text`, `websiteLink`, `imageFile`, and optionally `username`:

```json
{
  "text": "Example",
  "websiteLink": "https://example.com/",
  "imageFile": "example-icon.svg",
  "username": "optionalUsername"
}
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
