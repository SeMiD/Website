<template>
  <div class="navbar">
    <div class="logo">
      <img draggable="false" :src="require('~/assets/images/semid.png')" />
      <h1>SeMiD</h1>
    </div>
    <div class="links">
      <a href="/">Home</a>
      <a href="https://youtu.be/ID_L0aGI9bg">Downloads</a>
      <a href="https://github.com/PreMiD">GitHub</a>
      <a href="https://premid.app">PreMiD</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navigation"
});
</script>

<style lang="scss">
.navbar {
  display: flex;
  height: 75px;
  margin: 0 15px;
  justify-content: space-between;

  .logo {
    display: flex;

    img {
      width: 75px;
      height: 75px;
      margin-right: 1em;
    }
  }

  .links {
    display: flex;

    a {
      color: #6f789b;
      font-size: 1.1em;
      margin: auto;
      margin-right: 5em;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 800;
    }
  }
}
</style>
