import Vue from 'vue';
import Vuex from 'vuex';
const Toast = require('nativescript-toast');
import * as application from "@nativescript/core/application";

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
    age(state){
      return state.character.params.age
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
    tTierTwo(state){
      return state.character.transport.tierTwo
    },
    tTierThree(state){
      return state.character.transport.tierThree
    },
    tTierFour(state){
      return state.character.transport.tierFour
    },
    tTierFive(state){
      return state.character.transport.tierFive
    },
  },
  mutations: {
    /* ненормальные мутации,где меняются все данные в мутации - отвечают за уровни сложности (если сделаю)) */
    newGameNormal(state){
      state.character.params.age = 18;
      state.character.params.health = 50;
      state.character.params.hunger = 50;
      state.character.params.mood = 50;
      state.character.money.rub = 50;
      state.character.money.usd = 0;
      state.character.education.tierTwo = false;
      state.character.education.tierThree = false;
      state.character.education.tierFour = false;
      state.character.education.tierFive = false;
      state.character.transport.tierTwo = false;
      state.character.transport.tierThree = false;
      state.character.transport.tierFour = false;
      state.character.transport.tierFive = false;
      state.character.estate.tierTwo = false;
      state.character.estate.tierThree = false;
      state.character.estate.tierFour = false;
      state.character.estate.tierFive = false;
      state.character.business.tierTwo = false;
      state.character.business.tierThree = false;
      state.character.business.tierFour = false;
      state.character.business.tierFive = false;
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
    },

    edTierTwo(state){
      state.character.education.tierTwo = true
    },
    edTierThree(state){
      state.character.education.tierThree= true
    },
    edTierFour(state){
      state.character.education.tierFour = true
    },
    edTierFive(state){
      state.character.education.tierFive= true
    },

    esTierTwo(state){
      state.character.estate.tierTwo = true
    },
    esTierThree(state){
      state.character.estate.tierThree= true
    },
    esTierFour(state){
      state.character.estate.tierFour = true
    },
    esTierFive(state){
      state.character.estate.tierFive= true
    },

    trTierTwo(state){
      state.character.transport.tierTwo = true
    },
    trTierThree(state){
      state.character.transport.tierThree= true
    },
    trTierFour(state){
      state.character.transport.tierFour = true
    },
    trTierFive(state){
      state.character.transport.tierFive = true
    },
    alertRub(){
      alert(({
        title: "денях нет",
        button: "e",
        okButtonText: "ладно"
      }))
    },
    alertDeath(){
      alert(({
        title: "игра оконочена",
        button: "ок",
        okButtonText: "ок"
      }))
    }
  },

//если разберусь как подключить дочерние экшоны к родительскому состоянию - тогда определенно точно все розобью на модули
  actions: {
    workTierOne(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');
        ctx.state.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
      }
      else{
        ctx.commit('rub', 50);
        ctx.commit('health', -5);
        ctx.commit('hunger', -5);
        ctx.commit('mood', -5);
        ctx.commit('dayCounter');
      }
    },
    workTierTwo(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');te.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
      }
      else{
        ctx.commit('rub', 50);
        ctx.commit('health', -5);
        ctx.commit('hunger', -5);
        ctx.commit('mood', -5);
        ctx.commit('dayCounter');
      }
    },
    workTierThree(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');
        ctx.state.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
      }
      else{
        ctx.commit('rub', 50);
        ctx.commit('health', -5);
        ctx.commit('hunger', -5);
        ctx.commit('mood', -5);
        ctx.commit('dayCounter');
      }
    },
    workTierFour(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');
        ctx.state.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
      }
      else{
        ctx.commit('rub', 50);
        ctx.commit('health', -5);
        ctx.commit('hunger', -5);
        ctx.commit('mood', -5);
        ctx.commit('dayCounter');
      }
    },
    workTierFive(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');
        ctx.state.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
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
        }
      }
      else{
        ctx.commit('alertRub');
      }
    },
    eatTierTwo(ctx){
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
        ctx.commit('alertRub');

      }
    },
    eatTierThree(ctx){
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
        ctx.commit('alertRub');
      }
    },
    eatTierFour(ctx){
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
        ctx.commit('alertRub');
      }
    },
    eatTierFive(ctx){
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
        ctx.commit('alertRub');
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
        ctx.commit('alertRub');
      }
    },
    healTierTwo(ctx){
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
        ctx.commit('alertRub');
      }
    },
    healTierThree(ctx){
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
        ctx.commit('alertRub');
      }
    },
    healTierFour(ctx){
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
        ctx.commit('alertRub');
      }
    },
    healTierFive(ctx){
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
        ctx.commit('alertRub');
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
        ctx.commit('alertRub');
      }
    }, 
    enjoyTierTwo(ctx){
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
        ctx.commit('alertRub');
      }
    },
    enjoyTierThree(ctx){
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
        ctx.commit('alertRub');
      }
    },
    enjoyTierFour(ctx){
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
        ctx.commit('alertRub');
      }
    },
    enjoyTierFive(ctx){
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
        ctx.commit('alertRub');
      }
    },

    edTierTwo(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    edTierThree(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierThree');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    edTierFour(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierFour');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    edTierFive(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierFive');
      }
      else{
        ctx.commit('alertRub');
      }
    },

    esTierTwo(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('esTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierThree(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('esTierThree');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierFour(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('esTierFour');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierFive(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('esTierFive');
      }
      else{
        ctx.commit('alertRub');
      }
    },

    esTierTwo(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierThree(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierFour(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierFive(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
},
  modules: {

  }
});
