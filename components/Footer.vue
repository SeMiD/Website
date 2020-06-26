<template>
  <div class="footer">
    <p>
      <font-awesome-icon icon="copyright" />
      {{ new Date().getFullYear() }} SeMiD by
      <a href="https://premid.app" target="_blank">PreMiD&trade;</a>
    </p>
    <p>
      <font-awesome-icon icon="briefcase" /> Website maintained by nobody.
      <a href="https://premid.app/jobs" target="_blank">Apply now!</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer"
});
</script>

<style lang="scss" scoped>
.footer {
  flex: 0 0 auto;
  background: transparent;
  color: white;
  padding: 20px;
  padding-top: 3.5em;

  p {
    margin: 3px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: lighten(hsl(227, 18%, 12%), 10%);
  }

  a {
    position: relative;
    text-decoration: none;
    color: #7289da;
    cursor: pointer;
  }
}
</style>
