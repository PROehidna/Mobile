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
        tierTwo: false,
        tierThree: false,
        tierFour: false,
        tierFive: false,
      },
      estate:{
        tierTwo: false,
        tierThree: false,
        tierFour: false,
        tierFive: false,
      },
      transport: {
        tierTwo: false,
        tierThree: false,
        tierFour: false,
        tierFive: false,
      },
      business: {
        tierTwo: false,
        tierThree: false,
        tierFour: false,
        tierFive: false,
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
    },
    edTierTwo(state){
      return state.character.education.tierTwo
    },
    edTierThree(state){
      return state.character.education.tierThree
    },
    edTierFour(state){
      return state.character.education.tierFour
    },
    edTierFive(state){
      return state.character.education.tierFive
    },
    esTierTwo(state){
      return state.character.estate.tierTwo
    },
    esTierThree(state){
      return state.character.estate.tierThree
    },
    esTierFour(state){
      return state.character.estate.tierFour
    },
    esTierFive(state){
      return state.character.estate.tierFive
    },
    bTierTwo(state){
      return state.character.business.tierTwo
    },
    bTierThree(state){
      return state.character.business.tierThree
    },
    bTierFour(state){
      return state.character.business.tierFour
    },
    bTierFive(state){
      return state.character.business.tierFive
    },
  },

  mutations: {
    newGameEasy(state){
      state.character.params.age = 18;
      state.character.params.health = 50;
      state.character.params.hunger = 50;
      state.character.params.mood = 50;
      state.character.money.rub = 50;
      state.character.money.usd = 0;
      state.date.y = 2010;
      state.date.m = 1;
      state.date.d = 1;
    },

    rub(state, a){
      state.character.money.rub += a
    },
    hunger(state, a){
      state.character.params.hunger += a
    },
    health(state, a){
      state.character.params.health += a
    },
    mood(state, a){
      state.character.params.mood += a
    },
    dayCounter(state){
      state.date.d +=1
      if((state.date.d > 31 && (state.date.m == 1 || state.date.m == 3 ||state.date.m == 5 ||state.date.m == 7 ||state.date.m == 8 ||state.date.m == 10 ||state.date.m == 12)) || (state.date.d > 30 && (state.date.m == 4 || state.date.m == 6 || state.date.m == 9 || state.date.m == 11)) || (state.date.m == 2 && ((state.date.d > 29 && state.date.y % 4 == 0) || (state.date.d > 28 && state.date.y %4 !=0 )))) {
        state.date.d = 1;
        state.date.m +=1;
        if(state.date.m > 12){
          state.date.m = 1;
          state.date.y +=1;
          state.character.params.age +=1;
        }
      }
    }

  },
  actions: {
    workTierOne(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        alert(({
          title: "e",
          button: "e",
          okButtonText: "e"
        }));
      }
      else{
        ctx.commit('rub', 50);
        ctx.commit('health', -5);
        ctx.commit('hunger', -5);
        ctx.commit('mood', -5);
        ctx.commit('dayCounter');
      }
    },
    eatTierOne(ctx){
      if(ctx.state.character.money.rub >= 10){
        ctx.commit('rub', -10);
        ctx.commit('health', -1);
        ctx.commit('hunger', +5);
        ctx.commit('mood', -1);
        ctx.commit('dayCounter');
        if(ctx.state.character.params.hunger >= 100){
          ctx.state.character.params.hunger = 100;
        };
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },
    healTierOne(ctx){
      if(ctx.state.character.money.rub >= 10){
        ctx.commit('rub', -10);
        ctx.commit('health', +5);
        ctx.commit('hunger', -1);
        ctx.commit('mood', -1);
        ctx.commit('dayCounter');
        if(ctx.state.character.params.health >= 100){
          ctx.state.character.params.health = 100;
        };
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },
    enjoyTierOne(ctx){
      if(ctx.state.character.money.rub >= 10){
        ctx.commit('rub', -10);
        ctx.commit('health', -1);
        ctx.commit('hunger', -1);
        ctx.commit('mood', +5);
        ctx.commit('dayCounter');
        if(ctx.state.character.params.mood >= 100){
          ctx.state.character.params.mood = 100;
        };
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    }
    
    /* экшоны не должны быть пустыми и вообще я вью-bксом неправильно пользуюсь, но оно работатет */
  },
  modules: {

  }
});
