<template>
  <div class="something">
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
  width: 100%;
  margin: 0;
  background: #111218;
  overflow-y: hidden;
  scrollbar-color: hsl(227, 18%, 8%) hsl(227, 18%, 12%);
  scrollbar-width: thin;
}

.something {
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: hsl(227, 18%, 12%);
  border: none;
}

::-webkit-scrollbar-thumb {
  border: 4px solid hsl(227, 18%, 12%);
  border-radius: 20px;
  background: hsl(227, 18%, 8%);

  &:hover {
    background: lighten(hsl(227, 18%, 8%), 5%);
  }
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
