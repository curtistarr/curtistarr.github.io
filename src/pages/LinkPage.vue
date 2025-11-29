<template>
  <div id="content">
    <img id="profile-pic" src="../assets/img/profile-pic.jpg" alt="">
    <username-header :username="headerUsername" />

    <div id="links">
      <link-card v-for="link in links" :key="link.text" v-bind="link" />
    </div>

    <username-footer :username="footerUsername" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsernameHeader from '../components/UsernameHeader.vue';
import LinkCard from '../components/LinkCard.vue';
import UsernameFooter from '../components/UsernameFooter.vue';
import links from '../assets/links.json';

export default defineComponent({
  components: {UsernameFooter, LinkCard, UsernameHeader},
  data() {
    return {
      headerUsername: "Curtis Tarr",
      footerUsername: "@curtistarr",
      links: links
    }
  }
});
</script>

<style scoped>
#content {
  color: var(--color);
  margin: 0;
  padding: 0;
  position: center;
}

#profile-pic {
  width: 96px;
  height: 96px;
  display: block;
  margin: 35px auto 20px;
  border-radius: 50%;
  border: 2px solid #e1e4e8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  object-fit: cover;
}

#profile-pic:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  border-color: #d1d5da;
}

#links {
  max-width: 90%;
  width: 400px;
  display: block;
  margin: 27px auto;
  padding: 0 20px;
}
</style>
