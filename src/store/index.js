import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: generateDefaultState(),
  mutations: {
    updateScore(state, payload) {
      state.scores[payload.half][payload.key].val = payload.score;
    },
    resetState(state) {
      Object.assign(state, generateDefaultState())
    }
  },
})

function generateDefaultState() {
  return {
    scores: {
      top: {
        one: { title: "Enen", val: 0, step: 1, max: 5 },
        two: { title: "Tweeën", val: 0, step: 2, max: 10 },
        three: { title: "Drieën", val: 0, step: 3, max: 15 },
        four: { title: "Vieren", val: 0, step: 4, max: 20 },
        five: { title: "Vijven", val: 0, step: 5, max: 25 },
        six: { title: "Zessen", val: 0, step: 6, max: 30 },
      },
      bottom: {
        three_of_a_kind: { title: "Three of a kind", val: 0, step: 1, max: 30 },
        carre: { title: "Carre", val: 0, step: 1, max: 30 },
        full_house: { title: "Full house", val: 0, step: 25, max: 25 },
        kleine_straat: { title: "Kleine straat", val: 0, step: 30, max: 30 },
        grote_straat: { title: "Grot straat", val: 0, step: 40, max: 40 },
        yahtzee: { title: "Yahtzee", val: 0, step: 50, max: 50 },
        chance: { title: "Chance", val: 0, step: 1, max: 30 },
      },
    },
  }
}