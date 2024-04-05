<template>
  <footer>{{ username }}</footer>
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
footer {
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 20px;
}
</style>