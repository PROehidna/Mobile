import Vue from 'vue';
import Vuex from 'vuex';
const Toast = require('nativescript-toast');
import * as application from "@nativescript/core/application";
import * as ApplicationSettings from "application-settings";

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
    date:{
      d: 1,
      m: 1,
      y: 2010,
    },
    saves: [],
  },
  getters: {
    rub(state) {
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
    edTierTwoGtr(state){
      return state.character.education.tierTwo
    },
    edTierThreeGtr(state){
      return state.character.education.tierThree
    },
    edTierFourGtr(state){
      return state.character.education.tierFour
    },
    edTierFiveGtr(state){
      return state.character.education.tierFive
    },
    esTierTwoGtr(state){
      return state.character.estate.tierTwo
    },
    esTierThreeGtr(state){
      return state.character.estate.tierThree
    },
    esTierFourGtr(state){
      return state.character.estate.tierFour
    },
    esTierFiveGtr(state){
      return state.character.estate.tierFive
    },
    tTierTwoGtr(state){
      return state.character.transport.tierTwo
    },
    tTierThreeGtr(state){
      return state.character.transport.tierThree
    },
    tTierFourGtr(state){
      return state.character.transport.tierFour
    },
    tTierFiveGtr(state){
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
// а себе я желаю поскорее научиться работать со входными параметрами, поскольку стопицот однотипных функций - мрак и ужас
  actions: {
    workTierOne(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');
        ctx.state.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
      }
      else{
        ctx.commit('rub', 100);
        ctx.commit('health', -5);
        ctx.commit('hunger', -5);
        ctx.commit('mood', -5);
        ctx.commit('dayCounter');
      }
    },
    workTierTwo(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        ctx.commit('alertDeath');
        ctx.state.character.params.health = 0;
        ctx.state.character.params.hunger = 0;
        ctx.state.character.params.mood = 0;
      }
      else{
        ctx.commit('rub', 500);
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
        ctx.commit('rub', 1000);
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
        ctx.commit('rub', 5000);
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
        ctx.commit('rub', 50000);
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
      if(ctx.state.character.money.rub >= 50){
        ctx.commit('rub', -50);
        ctx.commit('health', -1);
        ctx.commit('hunger', +10);
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
      if(ctx.state.character.money.rub >= 100){
        ctx.commit('rub', -100);
        ctx.commit('health', -1);
        ctx.commit('hunger', +25);
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
      if(ctx.state.character.money.rub >= 500){
        ctx.commit('rub', -500);
        ctx.commit('health', -1);
        ctx.commit('hunger', +50);
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
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -1000);
        ctx.commit('health', -1);
        ctx.commit('hunger', +100);
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
      if(ctx.state.character.money.rub >= 50){
        ctx.commit('rub', -50);
        ctx.commit('health', +10);
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
      if(ctx.state.character.money.rub >= 100){
        ctx.commit('rub', -100);
        ctx.commit('health', +25);
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
      if(ctx.state.character.money.rub >= 500){
        ctx.commit('rub', -500);
        ctx.commit('health', +50);
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
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -1000);
        ctx.commit('health', +100);
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
      if(ctx.state.character.money.rub >= 50){
        ctx.commit('rub', -50);
        ctx.commit('health', -1);
        ctx.commit('hunger', -1);
        ctx.commit('mood', +10);
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
      if(ctx.state.character.money.rub >= 100){
        ctx.commit('rub', -100);
        ctx.commit('health', -1);
        ctx.commit('hunger', -1);
        ctx.commit('mood', +25);
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
      if(ctx.state.character.money.rub >= 500){
        ctx.commit('rub', -500);
        ctx.commit('health', -1);
        ctx.commit('hunger', -1);
        ctx.commit('mood', +50);
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
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -1000);
        ctx.commit('health', -1);
        ctx.commit('hunger', -1);
        ctx.commit('mood', +100);
        ctx.commit('dayCounter');
        if(ctx.state.character.params.mood >= 100){
          ctx.state.character.params.mood = 100;
        };
      }
      else{
        ctx.commit('alertRub');
      }
    },

    edTierTwoAct(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -1000);
        ctx.commit('edTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    edTierThreeAct(ctx){
      if(ctx.state.character.money.rub >= 50000){
        ctx.commit('rub', -50000);
        ctx.commit('edTierThree');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    edTierFourAct(ctx){
      if(ctx.state.character.money.rub >= 100000){
        ctx.commit('rub', -100000);
        ctx.commit('edTierFour');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    edTierFiveAct(ctx){
      if(ctx.state.character.money.rub >= 500000){
        ctx.commit('rub', -500000);
        ctx.commit('edTierFive');
      }
      else{
        ctx.commit('alertRub');
      }
    },

    esTierTwoAct(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -1000);
        ctx.commit('esTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierThreeAct(ctx){
      if(ctx.state.character.money.rub >= 50000){
        ctx.commit('rub', -50000);
        ctx.commit('esTierThree');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierFourAct(ctx){
      if(ctx.state.character.money.rub >= 100000){
        ctx.commit('rub', -100000);
        ctx.commit('esTierFour');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    esTierFiveAct(ctx){
      if(ctx.state.character.money.rub >= 500000){
        ctx.commit('rub', -500000);
        ctx.commit('esTierFive');
      }
      else{
        ctx.commit('alertRub');
      }
    },

    trTierTwoAct(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -1000);
        ctx.commit('trTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    trTierThreeAct(ctx){
      if(ctx.state.character.money.rub >= 5000){
        ctx.commit('rub', -5000);
        ctx.commit('trTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    trTierFourAct(ctx){
      if(ctx.state.character.money.rub >= 100000){
        ctx.commit('rub', -100000);
        ctx.commit('trTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    trTierFiveAct(ctx){
      if(ctx.state.character.money.rub >= 500000){
        ctx.commit('rub', -500000);
        ctx.commit('trTierTwo');
      }
      else{
        ctx.commit('alertRub');
      }
    },
    newTask (ctx) {
      ctx.saves.push({
        id: Math.random(),
        title: '{{ctx.state.date.d}}.{{ctx.state.date.m}}.{{ctx.state.date.y}}', 
      });
      this.save();
    },
    save(ctx){
      let toSave = Object.assign({}, ctx.state.character);
      ApplicationSettings.setString('saves', JSON.stringify(toSave));
    },
    mounted(ctx){
      if(ApplicationSettings.getString('saves')){
        ctx.state=Object.values(JSON.parse(ApplicationSettings.getString('saves')));
      }
    },
    load(ctx){

    }
},
  modules: {
  }
});
