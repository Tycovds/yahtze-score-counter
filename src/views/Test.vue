<template>
  <div class="container">
    <ul class="scores">
      <!-- top scores -->
      <h1>Bovenste Helft</h1>
      <li
        v-for="(val, key) in test_scores.top"
        :key="key"
        class="input-wrapper"
      >
        <span>{{ val.title }}:</span>
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
            <button class="btn cross" @click="val.val = false">X</button>

            <input
              type="range"
              class="slider"
              v-model.number="test_scores.top[key].val"
              min="0"
              :max="val.max"
              :step="val.step"
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
            <p class="num" v-if="val.val !== 0 && val.val !== false">
              {{ val.val }}
            </p>
            <p class="num" v-if="val.val === false">0</p>
          </div>
        </div>
      </li>
      <li>Total top: {{ totalTop }}</li>
      <!-- bottom scores -->
      <h1>Onderste Helft</h1>
      <li
        v-for="(val, key) in test_scores.bottom"
        :key="key"
        class="input-wrapper"
      >
        <p>{{ val.title }}:</p>
        <button class="btn cross" @click="val.val = false">Cross out</button>
        <input
          type="range"
          class="slider"
          v-model.number="test_scores.bottom[key].val"
          min="0"
          :max="val.max"
          :step="val.step"
        />

        <!-- <p>{{ val.val }}</p> -->
        <p v-if="val.val !== 0 && val.val !== false">{{ val.val }}</p>
        <p v-if="val.val === false">Crossed out</p>
      </li>
      <li>Total Bottom: {{ totalBottom }}</li>
    </ul>
  </div>
</template>

<script>
export default {
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
  }
}
</style>