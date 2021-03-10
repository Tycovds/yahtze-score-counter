<template>
  <li>
    <span> {{ config.name }} </span>
        <!-- editing -->
    <div class="flex" v-if="editing">
      <!-- <button class="btn" @click="num = false">Cross</button> -->
      <input class="slider"
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
        return this.$store.state[rename][this.config.key];
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
@use '../assets/scss/slider.scss';
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2em;
  .num {
    padding: 0 0 0 .5em;
  }
  

  .btn {
    background-color: #ddd;
    outline: none;
    border: none;
    width: auto;
    height: 100%;
    border-radius: 5px;
  }
 
}
</style>