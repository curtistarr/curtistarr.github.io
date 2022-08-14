<template>
  <ProfilePic/>
  <UsernameHeader/>

  <div id="links">
    <LinkButton website-link="https://github.com/" image-file="github-icon.svg" text="GitHub"/>
    <LinkButton website-link="https://www.linkedin.com/in/" image-file="linkedin-icon.svg" text="LinkedIn"/>
    <LinkButton website-link="https://hub.docker.com/u/" image-file="docker-icon.svg" text="Docker"/>
    <LinkButton website-link="https://medium.com/@" image-file="medium-icon.svg" text="Medium"/>
  </div>

  <UsernameFooter/>
</template>

<script>
import ProfilePic from "@/components/ProfilePic";
import UsernameHeader from "@/components/UsernameHeader";
import LinkButton from '@/components/LinkButton.vue';
import UsernameFooter from "@/components/UsernameFooter";

export default {
  name: 'App',
  components: {
    ProfilePic,
    UsernameHeader,
    LinkButton,
    UsernameFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Code');

:root {
  --font: 'Fira Code', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  --background: white;
  --color: #232333;
}

body {
  background-color: var(--background);
  color: var(--color);
  font-family: var(--font);
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#links {
  max-width: 90%;
  width: auto;
  display: block;
  margin: 27px auto;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #202124;
    --color: white;
  }
}
</style>
