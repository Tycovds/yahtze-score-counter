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
        one: { title: "Enen", desc: "Tel alle enen", val: 0, step: 1, max: 5 },
        two: { title: "Tweeën", desc: "Tel alle tweeën",  val: 0, step: 2, max: 10 },
        three: { title: "Drieën", desc: "Tel alle drieën", val: 0, step: 3, max: 15 },
        four: { title: "Vieren", desc: "Tel alle vieren", val: 0, step: 4, max: 20 },
        five: { title: "Vijven", desc: "Tel alle vijven", val: 0, step: 5, max: 25 },
        six: { title: "Zessen", desc: "Tel alle zessen", val: 0, step: 6, max: 30 },
      },
      bottom: {
        three_of_a_kind: { title: "Three of a kind", desc: "3 dezelfde, totaal v.d. 5 stenen", val: 0, step: 1, max: 30 },
        carre: { title: "Carre", desc: "4 dezelfde, totaal v.d. 5 stenen", val: 0, step: 1, max: 30 },
        full_house: { title: "Full house", desc: "3 + 2 dezelfde, 25", val: 0, step: 25, max: 25 },
        kleine_straat: { title: "Kleine straat", desc: "4 opeenvolgende nummers, 30", val: 0, step: 30, max: 30 },
        grote_straat: { title: "Grote straat", desc: "5 opeenvolgende nummers, 40", val: 0, step: 40, max: 40 },
        yahtzee: { title: "Yahtzee", desc: "5 dezelfde, 50", val: 0, step: 50, max: 50 },
        chance: { title: "Chance", desc: "vrije keus, totaal v.d. 5 stenen", val: 0, step: 1, max: 30 },
      },
    },
  }
}