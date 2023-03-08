<template>
  <a class="link" :href="link" rel="noopener">
    <img :src="image" alt="">
    <span>{{ text }}</span>
  </a>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    websiteLink: String,
    imageFile: String,
    text: String,
    userName: {
      default: 'curtistarr',
      type: String
    }

  },
  computed: {
    link() {
      return this.websiteLink + this.userName;
    },
    image() {
      return "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/" + this.imageFile;
    }
  }
}
</script>

<style scoped>
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 17px;
  border-radius: 5px;
  border: solid var(--color) 2px;
  text-decoration: none;
  transition: transform 250ms;
  background-color: rgba(0, 0, 0, 0.2);
}

.link:hover {
  transform: translateY(-5px);
}

.link img {
  width: 32px;
  height: 32px;
  display: block;
  margin-left: 5px;
  margin-right: 5px;
}

.link span {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color);
  word-wrap: break-word;
  white-space: nowrap;
}
</style>