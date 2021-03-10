<template>
  <div class="wrapper">
    <h1>{{ name }}</h1>
    <div class="list-wrapper">
      <slot>
        <!-- ul here -->
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
  max-width: 500px;
  width: 100%;
  h1 {
    margin: 0.5rem 0;
    color: #fff;
  }
  .list-wrapper {
    ul {
      list-style: none;
      li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .3em .5em;
        font-size: 21px;
        margin: 0.2em 0;
        background-color: #fff;
        border-radius: 5px;
        // height: 1em;
      }
    }
  }
}
</style>