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
        <button class="btn cross" @click="handleX">X</button>

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
    handleX() {
      this.data.val.val = false;
      this.editing = false;
      this.checkbox = false;
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
@use '../assets/scss/variables' as v;
.checkbox {
  height: 2.2em;
  width: 4.4em;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: "";
    background-color: rgb(208, 215, 255);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: 1em;
    transition: background-color ease 400ms;
  }
  &:checked::before {
    background-color: rgb(197, 255, 219);
  }
  &::after {
    content: "";
    background-color: v.$btn-color;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 3;
    border-radius: 50%;
    transition: transform 300ms ease;
  }
  &:checked::after {
    transform: translateX(100%);
  }

}
</style>