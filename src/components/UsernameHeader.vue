<template>
  <div class="header">
    <h1 class="username">{{ username }}</h1>
    <div class="subtitle">Software Engineer</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 24px;
}

.username {
  font-size: 1.5rem;
  font-weight: 600;
  color: #24292e;
  margin: 0;
  line-height: 1.25;
}

.subtitle {
  font-size: 0.95rem;
  color: #6a737d;
  margin-top: 4px;
}
</style>