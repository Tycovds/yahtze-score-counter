import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: generateDefaultState(),
  mutations: {
    updateScore(state, payload){
      state.scores[payload.half][payload.key].val = payload.score;
    }
  },
})

function generateDefaultState(){
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
        three_of_a_kind: { title: "T", val: 0, step: 1, max: 30 },
        carre: { title: "Carre", val: 0, step: 1, max: 30 },
        full_house: { title: "F", val: 0, step: 25, max: 25 },
        kleine_straat: { title: "K", val: 0, step: 30, max: 30 },
        grote_straat: { title: "G", val: 0, step: 40, max: 40 },
        yahtzee: { title: "Y", val: 0, step: 50, max: 50 },
        chance: { title: "C", val: 0, step: 1, max: 30 },
      },
    },
  }
}
// export default new Vuex.Store({
//   state: generateDefaultState(),
//   mutations: {
//     updateScore(state, payload) {
//       const rename = (payload.half == 'top') ? 'top_scores' : 'bottom_scores';
//       if (payload.score == false) {
//         state[rename][payload.key] = false;
        
//       } else {
//         state[rename][payload.key] = Number(payload.score);
//       }
//       checkState(state);
//     },
//     resetState(state){
//       Object.assign(state, generateDefaultState())
//     }

//   },
// })

// function checkState(state) {
//   // calculate top score total
//   calculateTotal(state, state.top_scores, 'topTotal');
  
//   // calculate bottom score total
//   calculateTotal(state, state.bottom_scores, 'bottomTotal');

//   (state.topTotal >= 63) ? state.bonus = 35 : state.bonus = 0;
  
//   const general_total = state.topTotal + state.bottomTotal + state.bonus;
//   state.generalTotal = general_total;
// }


// function calculateTotal(state, scores, target) {
//   const total = Object.values(scores).reduce((a, b) => {
//     if(typeof a && typeof b == 'number'){
//       return a + b;
//     } 
//     return a
//   }, 0);
//   state[target] = total;
// }


// function generateDefaultState(){
//   return {
//     top_scores: {
//       one: 0,
//       two: 0,
//       three: 0,
//       four: 0,
//       five: 0,
//       six: 0,
//     },
//     bonus: 0,
//     topTotal: 0,
//     bottom_scores: {
//       three_of_a_kind: 0,
//       carre: 0,
//       full_house: 0,
//       kleine_straat: 0,
//       grote_straat: 0,
//       yahtzee: 0,
//       chance: 0,
//     },
//     bottomTotal: 0,
//     generalTotal: 0
//   }
// }
