<template>
  <div class="home">
    <reset-state />
    <half-wrapper name="Bovenste Helft">
      <ul>
        <num-input
          :config="{ half: 'top', key: 'one', name: 'Enen', max: 5, step: 1 }"
        />
        <num-input
          :config="{
            half: 'top',
            key: 'two',
            name: 'Tweeën',
            max: 10,
            step: 2,
          }"
        />
        <num-input
          :config="{
            half: 'top',
            key: 'three',
            name: 'Drieën',
            max: 15,
            step: 3,
          }"
        />
        <num-input
          :config="{
            half: 'top',
            key: 'four',
            name: 'Vieren',
            max: 20,
            step: 4,
          }"
        />
        <num-input
          :config="{
            half: 'top',
            key: 'five',
            name: 'Vijven',
            max: 25,
            step: 5,
          }"
        />
        <num-input
          :config="{
            half: 'top',
            key: 'six',
            name: 'Zessen',
            max: 30,
            step: 6,
          }"
        />
        <li>
          <span>Totaal punten boven</span>
          <span>{{ this.$store.state.topTotal }}</span>
        </li>
        <li>
          <span>Bonus: {{ this.$store.state.topTotal }} / 63 </span>
          <span>{{ this.$store.state.bonus }}</span>
        </li>
        <li>
          <span>Totaal boven</span>
          <span>{{ this.$store.state.topTotal + this.$store.state.bonus }}</span>
        </li>
      </ul>
    </half-wrapper>
    <half-wrapper name="Onderste Helft">
      <ul>
        <num-input
          :config="{
            half: 'bottom',
            key: 'three_of_a_kind',
            name: 'Three of a kind',
            max: 30,
            step: 1,
          }"
        />
        <num-input
          :config="{
            half: 'bottom',
            key: 'carre',
            name: 'Carré',
            max: 30,
            step: 1,
          }"
        />
        <num-input
          :config="{
            half: 'bottom',
            key: 'full_house',
            name: 'Full House',
            max: 25,
            step: 25,
          }"
        />
        <num-input
          :config="{
            half: 'bottom',
            key: 'kleine_straat',
            name: 'Kleine straat',
            max: 30,
            step: 30,
          }"
        />
        <num-input
          :config="{
            half: 'bottom',
            key: 'grote_straat',
            name: 'Grote straat',
            max: 40,
            step: 40,
          }"
        />
        <num-input
          :config="{
            half: 'bottom',
            key: 'yahtzee',
            name: 'Yahtzee',
            max: 50,
            step: 50,
          }"
        />
        <num-input
          :config="{
            half: 'bottom',
            key: 'chance',
            name: 'Chance',
            max: 30,
            step: 1,
          }"
        />
        <li>
          <span>Totaal onder</span>
          <span>{{ this.$store.state.bottomTotal }}</span>
        </li>
      </ul>
    </half-wrapper>
    <half-wrapper name="Totaal generaal">
      <ul>
        <li>
          <span>Totaal onder</span>
          <span>{{ this.$store.state.bottomTotal }}</span>
        </li>
        <li>
          <span>Totaal boven</span>
          <span>{{ this.$store.state.topTotal + this.$store.state.bonus  }}</span>
        </li>
        <li>
          <span>Totaal generaal</span>
          <span>{{ this.$store.state.generalTotal }}</span>
        </li>
      </ul>
    </half-wrapper>
  </div>
</template>

<script>
import HalfWrapper from "../components/HalfWrapper.vue";
import NumInput from "../components/NumberInput.vue";
import  ResetState from '../components/Reset.vue';
export default {
  name: "Home",
  components: {
    "half-wrapper": HalfWrapper,
    "num-input": NumInput,
    "reset-state": ResetState
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
</style>
