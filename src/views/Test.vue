<template>
  <div class="container">
    <reset />
    <ul class="scores">
      <!-- top scores -->
      <h1>Bovenste Helft</h1>
      <test-input
        v-for="(val, key) in topScores"
        :key="key"
        :data="{ val, key, half: 'top' }"
        class="input-wrapper"
      />
      <li>
        <span>Total Top:</span> <span>{{ totalTop }}</span>
      </li>
      <h1>Onderste Helft</h1>
      <test-input
        v-for="(val, key) in bottomScores"
        :key="key"
        :data="{ val, key, half: 'bottom' }"
        class="input-wrapper"
      />

      <li>
        <span>Total Bottom:</span> <span>{{ totalBottom }}</span>
      </li>
      <h1>Generaal totaal</h1>
       <li>
        <span>Total Bottom:</span> <span>{{ totalBottom }}</span>
      </li>
       <li>
        <span>Total Top:</span> <span>{{ totalTop }}</span>
      </li>
       <li>
        <span>Totaal:</span> <span>{{ totalTop + totalBottom }}</span>
      </li>

    </ul>
  </div>
</template>

<script>
import TestInput from "../components/TestInput.vue";
import Reset from "../components/Reset.vue";
export default {
  components: {
    "test-input": TestInput,
    Reset,
  },
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    topScores() {
      return this.$store.state.scores.top;
    },
    bottomScores() {
      return this.$store.state.scores.bottom;
    },
    totalTop() {
      return this.calculateTotal(this.$store.state.scores.top);
    },
    totalBottom() {
      return this.calculateTotal(this.$store.state.scores.bottom);
    },
  },
  methods: {
    calculateTotal(scores) {
      return Object.values(scores)
        .map((obj) => {
          return obj.val;
        })
        .reduce((a, b) => {
          return Number(a) + Number(b);
        }, 0);
    },
  },
};
</script>

<style lang="scss">
@use '../assets/scss/slider';
@use '../assets/scss/variables' as v;
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .scores {
    padding: 1rem;
    max-width: 500px;
    width: 100%;
  }
  h1 {
    margin-bottom: 0.5em;
    color: #fff;
    text-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.3);
  }
  ul {
    list-style: none;
    li {
      @include v.li-tag;
    }
  }
}
</style>