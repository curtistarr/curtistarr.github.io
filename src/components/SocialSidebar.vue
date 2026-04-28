<template>
  <aside class="sidebar">
    <h2 class="sidebar-title">Find me elsewhere</h2>
    <link-card v-for="link in links" :key="link.text" v-bind="link" />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LinkCard from './LinkCard.vue';
import links from '../assets/links.json';

export default defineComponent({
  components: { LinkCard },
  data() {
    return { links };
  },
});
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
}

.sidebar-title {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6a737d;
  margin: 0 0 12px;
  padding: 0 4px;
}
</style>
