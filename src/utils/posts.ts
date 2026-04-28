import { marked } from 'marked';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export interface Post extends PostMeta {
  html: string;
}

const rawPosts = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, content: match[2] };
}

function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? path;
  return file.replace(/\.md$/, '');
}

const posts: Post[] = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: data.title ?? slugFromPath(path),
      date: data.date ?? '',
      summary: data.summary ?? '',
      html: marked.parse(content, { async: false }) as string,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts(): PostMeta[] {
  return posts.map(({ slug, title, date, summary }) => ({ slug, title, date, summary }));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
