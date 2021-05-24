import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    character: {
      params: {
        age: 18,
        health: 50,
        mood: 50,
        hunger: 50,
      },
      money:{
        rub: 50,
        usd: '',
      }
    },
    year: 2010,
    month: 1,
    day: 1,
  },

  getters: {
    moneyRUB(state) {
      return state.character.money.rub
    },
    health(state) {
      return state.character.params.health
    },
    hunger(state) {
      return state.character.params.hunger
    },
    mood(state) {
      return state.character.params.mood
    }
  },

  mutations: {
    work(state){
      state.character.money.rub += 50,
      state.character.params.hunger -=5,
      state.character.params.mood -=5,
      state.character.params.health -=5
    }
  },
  actions: {
    /* экшоны не должны быть пустыми и вообще я вьюиксом неправильно пользуюсь потому что я быдло, но оно работатет */
  }
});
