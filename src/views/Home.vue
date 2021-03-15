<template>
  <div class="container">
    <nav-bar />

    <h1>Bovenste Helft</h1>
    <ul class="scores">
      <!-- top scores -->
      <test-input
        v-for="(val, key) in topScores"
        :key="key"
        :data="{ val, key, half: 'top' }"
        class="input-wrapper"
      />
      <li>
        <span>Totaal aantal punten</span> <span>{{ totalTop }}</span>
      </li>
      <li>
        <span
          >Bonus <em v-if="bonus < 35">({{ totalTop }} / 63)</em>
        </span>
        <span>{{ bonus }}</span>
      </li>
      <li>
        <span>Totaal bovenste helft</span> <span>{{ totalTop + bonus }}</span>
      </li>
    </ul>
    <h1>Onderste Helft</h1>
    <ul class="scores">
      <test-input
        v-for="(val, key) in bottomScores"
        :key="key"
        :data="{ val, key, half: 'bottom' }"
        class="input-wrapper"
      />
    </ul>

    <!-- score totaal  generaal -->
    <h1>Totaal</h1>
    <ul class="scores">
      <li>
        <span>Totaal onderste helft</span> <span>{{ totalBottom }}</span>
      </li>
      <li>
        <span>Totaal bovenste helft</span> <span>{{ totalTop + bonus }}</span>
      </li>
      <li>
        <span>Totaal generaal</span>
        <span>{{ totalTop + bonus + totalBottom }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import TestInput from "../components/ScoreInput.vue";
import NavBar from "../components/NavBar";
export default {
  components: {
    "test-input": TestInput,
    NavBar,
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
    bonus() {
      return this.totalTop >= 63 ? 35 : 0;
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
    padding: 0 1rem 1rem 1rem;
    max-width: 500px;
    width: 100%;
  }

  h1 {
    @include v.h1;
    margin: 0.5em 0 0.2em 0;
  }
  ul {
    list-style: none;

    li {
      @include v.li-tag;
    }
  }
}
</style>