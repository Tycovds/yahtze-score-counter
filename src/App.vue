<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}
#app {
  background: linear-gradient(to bottom, rgb(58, 58, 58), rgb(36, 36, 36));
  min-height: 100vh;
  width: 100%;
}
</style>
