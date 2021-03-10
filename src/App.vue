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
  min-height: 100vh;
  width: 100%;
  // background: linear-gradient(to bottom, rgb(58, 58, 58), rgb(36, 36, 36));
  background: rgb(33,62,59);
background: linear-gradient(0deg, rgb(0, 110, 161) 0%, #37b3aa 100%);
}
body {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}
</style>
