---
title: A short markdown cheatsheet
date: 2026-04-15
summary: A reference for the markdown features this blog renders, useful when drafting new posts.
---

# A short markdown cheatsheet

This post doubles as a render test for the blog. If something here looks wrong,
the styling needs fixing.

## Headings

Use `#` through `######` for headings. The post title comes from frontmatter,
so you usually want `##` and below in the body.

## Inline formatting

You get the usual: **bold**, *italic*, `inline code`, and [links](https://example.com).

## Lists

Unordered:

- Espresso
- Pour over
- Cold brew, on the rare hot day

Ordered:

1. Boil water
2. Grind beans
3. Wait, impatiently

## Code blocks

```ts
function greet(name: string): string {
  return `hello, ${name}`;
}
```

## Blockquotes

> The best code is the code you didn't have to write.

## Done

That's the whole surface area for now. If a post needs something more exotic
(tables, footnotes, math), I'll add support when I actually need it rather
than ahead of time.
