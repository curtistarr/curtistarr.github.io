<template>
  <footer class="footer">
    <div class="footer-content">
      <span class="footer-username">{{ username }}</span>
    </div>
  </footer>
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
.footer {
  text-align: center;
  padding: 24px 0;
  margin-top: 8px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-username {
  font-size: 0.85rem;
  color: #24292e;
  font-weight: 500;
}
</style>