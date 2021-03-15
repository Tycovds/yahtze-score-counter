<template>
  <div class="navbar">
    <h1 id="title">Yahtzee</h1>
    <reset-score class="reset-btn" />
  </div>
</template>
<script>
import ResetScore from "./Reset";
export default {
  components: {
    ResetScore,
  },
};
</script>
<style lang="scss" >
@use '../assets/scss/variables' as v;
.navbar {
  width: 100%;
  display: grid;
  align-items: center;
  grid-template: auto / repeat(3, 1fr);
  padding: 0 1em;
  background-color: rgba(255, 255, 255, 0.1);
  #title {
    @include v.h1;
    grid-column: 2 / 3;
    justify-self: center;
    letter-spacing: 5px;
    color: rgb(255, 255, 255);
    font-size: clamp(1.5em, 10vmin 4em);
    text-shadow: 2px 2px 0px #ff4444, 4px 4px 0px rgb(0, 26, 255);
    
  }
  .reset-btn {
    grid-column: 3 / 4;
    justify-self: end;
    
  }
}
</style>