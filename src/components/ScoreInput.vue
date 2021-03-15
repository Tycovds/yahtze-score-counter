<template>
  <li>
    <div class="text">
      <span> {{ data.val.title }} </span>
      <p>{{ data.val.desc }}</p>
    </div>
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
          v-if="data.val.step === data.val.max"
          @change="onChange"
          v-model="checkbox"
          type="checkbox"
          style="margin: 0 1em"
          class="checkbox"
        />
        <input
          v-else
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
      checkbox: false,
    };
  },
  methods: {
    onChange() {
      if (this.checkbox) {
        this.score = this.data.val.max;
      } else {
        this.score = 0;
      }
    },
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
.checkbox {
  height: 2.2em;
  width: 2.2em;
}
</style>