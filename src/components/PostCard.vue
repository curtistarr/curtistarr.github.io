<template>
  <router-link class="post-card" :to="{ name: 'post', params: { slug } }">
    <div class="post-card-meta">
      <time v-if="date" :datetime="date">{{ formattedDate }}</time>
    </div>
    <h2 class="post-card-title">{{ title }}</h2>
    <p v-if="summary" class="post-card-summary">{{ summary }}</p>
    <span class="post-card-cta">
      Read post
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostCard',
  props: {
    slug: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, default: '' },
    summary: { type: String, default: '' },
  },
  computed: {
    formattedDate(): string {
      if (!this.date) return '';
      const d = new Date(this.date);
      if (Number.isNaN(d.getTime())) return this.date;
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
.post-card {
  display: block;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px 24px;
  text-decoration: none;
  border: 1px solid #e1e4e8;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  text-align: left;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: #d1d5da;
  background: #fafbfc;
}

.post-card-meta {
  font-size: 0.8rem;
  color: #6a737d;
  margin-bottom: 6px;
}

.post-card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #24292e;
  margin: 0 0 8px;
  line-height: 1.3;
}

.post-card-summary {
  font-size: 0.9rem;
  color: #444d56;
  line-height: 1.5;
  margin: 0 0 12px;
}

.post-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #0366d6;
}

.post-card:hover .post-card-cta {
  color: #024ea4;
}
</style>
