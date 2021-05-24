
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
  mutations:{
    work(state){
      state.character.money.rub += 50,
      state.character.params.hunger -=5,
      state.character.params.mood -=5,
      state.character.params.health -=5
      if(state.character.params.health<=0){
        this.$modal.close()
      }
    },
  },
  getters:{
    rub(state) {
      return state.character.money.rub
    },
    hunger(state) {
      return state.character.params.hunger
    },
    health(state) {
      return state.character.params.health
    },
    mood(state) {
      return state.character.params.mood
    }
  }
}