export default {
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
    date:{
      d: 1,
      m: 1,
      y: 2010
    }
  },
  actions: {

  },
  mutations: {
    eat(state){
      state.character.money.rub -= 10,
      state.character.params.hunger +=10
    },
  },
  getters:{
    rub(state) {
      return state.character.money.rub
    },
    hunger(state) {
      return state.character.params.hunger
    },
  }
}