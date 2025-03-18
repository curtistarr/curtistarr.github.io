<template>
  <a class="card" :href="link" rel="noopener" target="_blank">
    <div class="card-content">
      <div class="card-icon">
        <img :src="image" :alt="text">
      </div>
      <div class="card-text">
        <span class="card-title">{{ text }}</span>
      </div>
      <div class="card-arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "LinkCard",
  props: {
    websiteLink: {
      type: String,
      required: true
    },
    imageFile: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: false,
      default: 'curtistarr'
    }
  },
  computed: {
    link() {
      return this.websiteLink + this.username;
    },
    image() {
      return new URL(`../assets/img/logos/${this.imageFile}`, import.meta.url).href;
    }
  }
});
</script>

<style scoped>
.card {
  display: block;
  background: #ffffff;
  border-radius: 8px;
  padding: 12px 16px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #e1e4e8;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: #d1d5da;
  background: #fafbfc;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #f6f8fa;
  border-radius: 6px;
  padding: 6px;
  border: 1px solid #e1e4e8;
  flex-shrink: 0;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #24292e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-arrow {
  display: flex;
  align-items: center;
  color: #6a737d;
  opacity: 0.5;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(2px);
}
</style> 