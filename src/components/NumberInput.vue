<template>
  <li>
    <span> {{ config.name }} </span>
    <!-- editing -->
    <div class="flex" v-if="editing">
      <!-- <button class="btn cross" @click="num = false">X</button> -->
      <input
        class="slider"
        type="range"
        min="0"
        :max="config.max"
        :step="config.step"
        v-model="num"
      />

      <img
        @click="editing = false"
        class="btn"
        id="checkmark"
        src="../assets/checkmark.svg"
        alt="checkmark"
      />

      <p class="num">{{ num }}</p>
    </div>
    <!-- default -->
    <div class="flex" v-else>
      <img
        @click="editing = true"
        class="btn"
        id="edit"
        src="../assets/edit.svg"
        alt="edit icon"
      />
      <p class="num">{{ num }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "numberInput",
  props: ["config"],
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    num: {
      get() {
        const rename =
          this.config.half == "top" ? "top_scores" : "bottom_scores";
        const key = this.$store.state[rename][this.config.key];
        // console.log(key);
          if (key == 0) {
            return " ";
          }
        if (key == 'empty') {
          // console.log(key);
          // console.log(this.$store.state[rename])
          return "0";
        }
        if (typeof key == "number") {
          return key;
        }
        return 'error';
      },
      set(num) {
        this.$store.commit("updateScore", {
          key: this.config.key,
          score: num,
          half: this.config.half,
        });
      },
    },
  },
};
</script>
<style lang="scss">
@use '../assets/scss/slider';
@use '../assets/scss/variables' as v;
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2em;
  .num {
    padding: 0 0 0 0.5em;
  }

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
    padding: 0 .5em;
    font-weight: bold;
    font-size: 1em;
  }
}
</style>