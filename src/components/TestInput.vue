<template>
  <li>
    <span> {{ data.val.title }} </span>
    <div class="flex-wrapper">
      <!-- default -->
      <div v-if="!editing" class="flex">
        <img
          @click="editing = true"
          class="btn"
          id="edit"
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
          class="btn"
          id="checkmark"
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3em 0.5em;
  font-size: 21px;
  margin: 0.2em 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 7px rgba($color: #000000, $alpha: 0.3);

  .flex-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .num {
      min-width: 4ch;
      text-align: end;
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 2em;

      .btn {
        background-color: v.$btn-color;
        outline: none;
        border: none;
        width: auto;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.4);
      }
      .cross {
        color: #fff;
        padding: 0 0.5em;
        font-weight: bold;
        font-size: 1em;
      }
    }
  }
}
</style>