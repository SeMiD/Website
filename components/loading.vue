<template>
  <div class="loading">
    <img v-if="asd == true" :src="require(`~/assets/gifs/${gif}.gif`)" />
    <div class="text">
      <h1 class="t"><span class="text-highlight">SeMiD</span> is loading...</h1>
      <p class="t">pls wait kthx</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import anime from "animejs";

export default Vue.extend({
  name: "loading",
  data() {
    return {
      gif: "",
      asd: false
    };
  },
  beforeMount() {
    let gifs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    this.gif = gifs[Math.floor(gifs.length * Math.random())];
    this.asd = true;
  },
  mounted() {
    anime({
      targets: ".text .t",
      translateX: [20, 0],
      direction: "alternate",
      delay: anime.stagger(100)
    });
  }
});
</script>

<style lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .text-highlight {
    color: #b3aeff;
    background: linear-gradient(30deg, #7289da, #b3aeff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    margin-right: 3em;
    width: 450px;
    height: 450px;
  }

  div {
    h1 {
      font-size: 4em;
    }

    p {
      font-size: 2em;
    }
  }
}
</style>
