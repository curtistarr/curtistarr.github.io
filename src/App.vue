<template>
  <div id="content">
    <img id="profile-pic" src="/assets/img/profile-pic.jpg" alt="">
    <username-header :username="headerUsername" />

    <div id="links">
      <link-button v-for="link in links" :key="link.text" v-bind="link" />
    </div>

    <username-footer :username="footerUsername" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerUsername: "Curtis Tarr",
      footerUsername: "@CurtisTarr",
      links: [
        {
          text: "GitHub",
          websiteLink: "https://github.com/",
          imageFile: "github-icon.svg"
        },
        {
          text: "LinkedIn",
          websiteLink: "https://www.linkedin.com/in/",
          imageFile: "linkedin-icon.svg"
        },
        {
          text: "Docker",
          websiteLink: "https://hub.docker.com/u/",
          imageFile: "docker-icon.svg"
        },
        {
          text: "Medium",
          websiteLink: "https://medium.com/@",
          imageFile: "medium-icon.svg"
        },
        {
          text: "Twitter",
          websiteLink: "https://twitter.com/",
          imageFile: "twitter.svg"
        },
        {
          text: "Postman",
          websiteLink: "https://www.postman.com/",
          imageFile: "postman-icon.svg"
        },
        {
          text: "Stack Overflow",
          websiteLink: "https://stackoverflow.com/users/",
          imageFile: "stackoverflow-icon.svg",
          username: "6703937/curtis-tarr"
        }
      ]
    }
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
