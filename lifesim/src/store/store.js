//я послал декомпозицию в пешее эротическое и надеюсь что эта херь будет работать

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
        usd: 0,
      },
      education: {
        school: false,
        college: false,
        university: false,

      },
      estate:{

      },
      transport: {

      },
      business: {

      }
    },
    date: {
      y: 2010,
      m: 1,
      d: 1,
    }
  },

  getters: {
    rub(state) {
      return state.character.money.rub
    },
    usd(state) {
      return state.character.money.usd
    },
    health(state) {
      return state.character.params.health
    },
    hunger(state) {
      return state.character.params.hunger
    },
    mood(state) {
      return state.character.params.mood
    },
    d(state){
      return state.date.d
    },
    m(state){
      return state.date.m
    },
    y(state){
      return state.date.y
    }
  },

  mutations: {
    work(state){
      state.character.money.rub += 50,
      state.character.params.hunger -=5,
      state.character.params.mood -=5,
      state.character.params.health -=5
    },
    eat(state){
      state.character.params.hunger +=10,
      state.character.money.rub -=10
    },
    heal(state){
      state.character.params.health +=10,
      state.character.money.rub -=10
    },
    enjoy(state){
      state.character.params.mood +=10,
      state.character.money.rub -=10
    },
    dayCounter(state){
      state.date.d +=1
      if((state.date.d > 31 && (state.date.m == 1 || state.date.m == 3 ||state.date.m == 5 ||state.date.m == 7 ||state.date.m == 8 ||state.date.m == 10 ||state.date.m == 12)) || (state.date.d > 30 && (state.date.m == 4 || state.date.m == 6 || state.date.m == 9 || state.date.m == 11)) || (state.date.m == 2 && ((state.date.d > 29 && state.date.y % 4 == 0) || (state.date.d > 28 && state.date.y %4 !=0 )))) {
        state.date.d = 1;
        state.date.m +=1;
        if(state.date.m > 12){
          state.date.m = 1;
          state.date.y +=1;
        }
      }
    }

  },
  actions: {
    /* экшоны не должны быть пустыми и вообще я вьюиксом неправильно пользуюсь потому что я быдло, но оно работатет */
  }
});
