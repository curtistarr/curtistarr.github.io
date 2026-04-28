<template>
  <div class="page">
    <header class="page-header">
      <img class="profile-pic" src="../assets/img/profile-pic.jpg" alt="">
      <username-header :username="headerUsername" />
    </header>

    <div class="layout">
      <main class="feed">
        <h2 class="feed-title">Posts</h2>
        <div v-if="posts.length === 0" class="empty">
          No posts yet. Check back soon.
        </div>
        <post-card v-for="post in posts" :key="post.slug" v-bind="post" />
      </main>

      <social-sidebar class="sidebar-col" />
    </div>

    <username-footer :username="footerUsername" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsernameHeader from '../components/UsernameHeader.vue';
import UsernameFooter from '../components/UsernameFooter.vue';
import PostCard from '../components/PostCard.vue';
import SocialSidebar from '../components/SocialSidebar.vue';
import { getAllPosts } from '../utils/posts';

export default defineComponent({
  components: { UsernameHeader, UsernameFooter, PostCard, SocialSidebar },
  data() {
    return {
      headerUsername: 'Curtis Tarr',
      footerUsername: '@curtistarr',
      posts: getAllPosts(),
    };
  },
});
</script>

<style scoped>
.page {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px 40px;
  color: #24292e;
}

.page-header {
  text-align: center;
  padding-top: 35px;
}

.profile-pic {
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto 20px;
  border-radius: 50%;
  border: 2px solid #e1e4e8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  object-fit: cover;
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 32px;
  margin-top: 32px;
  align-items: start;
}

.feed {
  min-width: 0;
}

.feed-title {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6a737d;
  margin: 0 0 12px;
  padding: 0 4px;
  text-align: left;
}

.empty {
  background: #ffffff;
  border: 1px dashed #d1d5da;
  border-radius: 8px;
  padding: 24px;
  color: #6a737d;
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 720px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sidebar-col {
    order: 2;
  }
}
</style>
