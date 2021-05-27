import Vue from 'vue';
import Vuex from 'vuex';
const Toast = require('nativescript-toast');

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

  },

//если разберусь как подключить дочерние экшоны к родительскому состоянию - тогда определенно точно все розобью на модули
  actions: {
    workTierOne(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        alert(({
          title: "игра оконочена",
          button: "ок",
          okButtonText: "ок"
        }));
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
        alert(({
          title: "игра оконочена",
          button: "ок",
          okButtonText: "ок"
        }));
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
    workTierThree(ctx){
      if (ctx.state.character.params.health <= 0 || ctx.state.character.params.hunger <= 0|| ctx.state.character.params.mood <=0){
        alert(({
          title: "игра оконочена",
          button: "ок",
          okButtonText: "ок"
        }));
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
        alert(({
          title: "игра оконочена",
          button: "ок",
          okButtonText: "ок"
        }));
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
        alert(({
          title: "игра оконочена",
          button: "ок",
          okButtonText: "ок"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
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
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },

    edTierTwo(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },
    edTierThree(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },
    edTierFour(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },
    edTierFive(ctx){
      if(ctx.state.character.money.rub >= 1000){
        ctx.commit('rub', -10);
        ctx.commit('edTierTwo');
      }
      else{
        alert(({
          title: "денях нет",
          button: "e",
          okButtonText: "ладно"
        }));
      }
    },
   
    showRub(ctx){
      const rubInfo = Toast.makeText('остаток средств ' + ctx.state.character.money.rub + ' рублей', 'short');
      rubInfo.setDuration(10)
      
      rubInfo.show();
    }
},
  modules: {

  }
});
