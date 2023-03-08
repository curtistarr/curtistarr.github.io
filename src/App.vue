<template>
  <div id="content">
    <ProfilePic/>
    <UsernameHeader/>

    <div id="links">
      <LinkButton website-link="https://github.com/" image-file="github-icon.svg" text="GitHub"/>
      <LinkButton website-link="https://www.linkedin.com/in/" image-file="linkedin-icon.svg" text="LinkedIn"/>
      <LinkButton website-link="https://hub.docker.com/u/" image-file="docker-icon.svg" text="Docker"/>
      <LinkButton website-link="https://medium.com/@" image-file="medium-icon.svg" text="Medium"/>
      <LinkButton website-link="https://twitter.com/" image-file="twitter.svg" text="Twitter"/>
      <LinkButton website-link="https://www.postman.com/" image-file="postman-icon.svg" text="Postman"/>
      <LinkButton website-link="https://stackoverflow.com/users/" user-name="6703937/curtis-tarr" image-file="stackoverflow-icon.svg" text="Stack Overflow"/>
    </div>

    <UsernameFooter/>
  </div>
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
  font-family: 'Fira Code', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-rendering: optimizeLegibility;
  --color: white;
}

body {
  background: #34495e
}

#content {
  color: var(--color);
  margin: 0;
  padding: 0;
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
</style>
