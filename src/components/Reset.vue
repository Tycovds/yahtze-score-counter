<template>
    <img
        @click="reset"
        class="btn"
        id="reset"
        src="../assets/reset.svg"
        alt="reset"
      />
</template>

<script>
export default {

  methods: {
    reset() {
        if(window.confirm("Reset score?")){
            this.$store.commit("resetState");
        }
    },
  },
};
</script>
<style lang="scss" scoped>
@use '../assets/scss/variables' as v;
#reset {
    height: 3em;
    width: 3em;
    z-index: 2;
    padding: .4em;
    background-color: v.$btn-color;
    border-radius: 5px;
    box-shadow: 2px 2px 7px rgba($color: #000000, $alpha: 0.2),
    -2px -2px 7px rgba($color: #bcfffb, $alpha: 0.4);
    cursor: pointer;
}
</style>