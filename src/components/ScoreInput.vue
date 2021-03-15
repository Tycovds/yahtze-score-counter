<template>
  <li>
    <span> {{ data.val.title }} </span>
    <div class="flex-wrapper">
      <!-- default -->
      <div v-if="!editing" class="flex">
        <img
          @click="editing = true"
          class="btn edit"
         
          src="../assets/edit.svg"
          alt="edit icon"
        />
      </div>
      <!-- editing -->
      <div v-if="editing" class="flex">
        <button class="btn cross" @click="data.val.val = false">X</button>

        <input
          type="range"
          class="slider"
          v-model.number="score"
          min="0"
          :max="data.val.max"
          :step="data.val.step"
        />
        <img
          @click="editing = false"
          class="btn checkmark"
         
          src="../assets/checkmark.svg"
          alt="checkmark"
        />
      </div>
      <div class="num">
        <p class="num" v-if="data.val.val !== 0 && data.val.val !== false">
          {{ data.val.val }}
        </p>
        <p class="num" v-if="data.val.val === false">0</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    score: {
      get() {
        return this.$store.state.scores[this.data.half][this.data.key].val;
      },
      set(score) {
        return this.$store.commit("updateScore", {
          score: score,
          key: this.data.key,
          half: this.data.half,
        });
      },
    },
  },
};
</script>

<style lang="scss">
@use '../assets/scss/slider';
@use '../assets/scss/variables' as v;
li {
    @include v.li-tag;
}
</style>