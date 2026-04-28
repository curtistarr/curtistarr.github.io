<template>
  <div class="page">
    <router-link class="back-link" :to="{ name: 'home' }">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Back
    </router-link>

    <article v-if="post" class="post">
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <time v-if="post.date" class="post-date" :datetime="post.date">{{ formattedDate }}</time>
      </header>
      <div class="markdown-body" v-html="post.html" />
    </article>

    <div v-else class="not-found">
      <h1>Post not found</h1>
      <p>This post doesn't exist (or has been removed).</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getPost, Post } from '../utils/posts';

export default defineComponent({
  props: {
    slug: { type: String, required: true },
  },
  computed: {
    post(): Post | undefined {
      return getPost(this.slug);
    },
    formattedDate(): string {
      if (!this.post?.date) return '';
      const d = new Date(this.post.date);
      if (Number.isNaN(d.getTime())) return this.post.date;
      return d.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
});
</script>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 20px 64px;
  color: #24292e;
  text-align: left;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #6a737d;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 24px;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #24292e;
}

.post-header {
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e1e4e8;
}

.post-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #24292e;
  margin: 0 0 8px;
  line-height: 1.25;
}

.post-date {
  font-size: 0.85rem;
  color: #6a737d;
}

.not-found {
  text-align: center;
  padding: 64px 0;
  color: #6a737d;
}
</style>

<style>
.markdown-body {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #24292e;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4 {
  font-weight: 600;
  line-height: 1.3;
  margin: 32px 0 12px;
  color: #24292e;
}

.markdown-body h1 { font-size: 1.5rem; }
.markdown-body h2 { font-size: 1.25rem; }
.markdown-body h3 { font-size: 1.05rem; }
.markdown-body h4 { font-size: 0.95rem; }

.markdown-body p {
  margin: 0 0 16px;
}

.markdown-body a {
  color: #0366d6;
  text-decoration: none;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ul,
.markdown-body ol {
  margin: 0 0 16px;
  padding-left: 24px;
}

.markdown-body li {
  margin-bottom: 4px;
}

.markdown-body code {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.85em;
  font-family: 'Fira Code', monospace;
}

.markdown-body pre {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  overflow-x: auto;
  margin: 0 0 16px;
}

.markdown-body pre code {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.markdown-body blockquote {
  margin: 0 0 16px;
  padding: 8px 16px;
  border-left: 4px solid #d1d5da;
  background: #f6f8fa;
  color: #444d56;
}

.markdown-body blockquote p:last-child {
  margin-bottom: 0;
}

.markdown-body hr {
  border: none;
  border-top: 1px solid #e1e4e8;
  margin: 24px 0;
}

.markdown-body img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}
</style>
