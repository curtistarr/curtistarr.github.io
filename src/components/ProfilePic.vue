<template>
  <img id="profile-pic" src="https://github.com/tarrcurtis.png" alt="">
</template>

<script>
export default {
  name: "ProfilePic"
}
</script>

<style scoped>
#profile-pic {
  width: 96px;
  height: 96px;
  display: block;
  margin: 35px auto 20px;
  border-radius: 50%;
  border: solid var(--color) 2px;
}
</style>