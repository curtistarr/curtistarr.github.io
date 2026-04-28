<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Code');

:root {
  font-family: 'Fira Code', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  --color: white;
}

body {
  background-color: #f6f8fa;
  margin: 0;
}
</style>
