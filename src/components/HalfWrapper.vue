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
    margin-bottom: .5em;
    color: #fff;
    text-shadow: 2px 2px 2px rgba($color: #000000, $alpha: .3);
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
        box-shadow: 2px 2px 7px rgba($color: #000000, $alpha: .3);
}
    }
  }
}
</style>