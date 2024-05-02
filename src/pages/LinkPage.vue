<template>
  <div id="content">
    <img id="profile-pic" src="../assets/img/profile-pic.jpg" alt="">
    <username-header :username="headerUsername" />

    <div id="links">
      <link-button v-for="link in links" :key="link.text" v-bind="link" />
    </div>

    <username-footer :username="footerUsername" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsernameHeader from '../components/UsernameHeader.vue';
import LinkButton from '../components/LinkButton.vue';
import UsernameFooter from '../components/UsernameFooter.vue';
import links from '../assets/links.json';

export default defineComponent({
  components: {UsernameFooter, LinkButton, UsernameHeader},
  data() {
    return {
      headerUsername: "Curtis Tarr",
      footerUsername: "@CurtisTarr",
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
  border: solid var(--color) 2px;
}

#links {
  max-width: 90%;
  width: 250px;
  display: block;
  margin: 27px auto;
}
</style>
