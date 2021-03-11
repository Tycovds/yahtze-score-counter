<template>
  <div class="container">
    <ul class="scores">
      <!-- top scores -->
      <h1>Bovenste Helft</h1>
      <test-input
        v-for="(val, key) in topScores"
        :key="key"
        :data="{val, key, half: 'top'}"
        class="input-wrapper"
      />
       <h1>Onderste Helft</h1>
      <test-input
        v-for="(val, key) in bottomScores"
        :key="key"
        :data="{val, key, half: 'bottom'}"
        class="input-wrapper"
      />

      <!-- <li>Total Bottom: {{ totalBottom }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    'test-input': () => import('../components/TestInput.vue')
  },
  data() {
    return {
      editing: false,
      test_scores: {
        top: {
          one: { title: "Enen", val: 0, step: 1, max: 5 },
          two: { title: "Tweeën", val: 0, step: 2, max: 10 },
          three: { title: "Drieën", val: 0, step: 3, max: 15 },
          four: { title: "Vieren", val: 0, step: 4, max: 20 },
          five: { title: "Vijven", val: 0, step: 5, max: 25 },
          six: { title: "Zessen", val: 0, step: 6, max: 30 },
        },
        bottom: {
          three_of_a_kind: { title: "T", val: 0, step: 1, max: 30 },
          carre: { title: "Carre", val: 0, step: 1, max: 30 },
          full_house: { title: "F", val: 0, step: 25, max: 25 },
          kleine_straat: { title: "K", val: 0, step: 30, max: 30 },
          grote_straat: { title: "G", val: 0, step: 40, max: 40 },
          yahtzee: { title: "Y", val: 0, step: 50, max: 50 },
          chance: { title: "C", val: 0, step: 1, max: 30 },
        },
      },
      bonus: 0,
      topTotal: 0,
      bottom_scores: {
        three_of_a_kind: 0,
        carre: 0,
        full_house: 0,
        kleine_straat: 0,
        grote_straat: 0,
        yahtzee: 0,
        chance: 0,
      },
      bottomTotal: 0,
      generalTotal: 0,
    };
  },
  computed: {
    topScores(){
      return this.$store.state.scores.top
    },
    bottomScores(){
      return this.$store.state.scores.bottom
    },
    totalTop() {
      return this.calculateTotal(this.test_scores.top);
    },
    totalBottom() {
      return this.calculateTotal(this.test_scores.bottom);
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
    
  }
}
</style>