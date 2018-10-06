import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        name: 'Demo Boy',
        real_name: 'Josh Perkins',
        archtype: 'Nova', // is short
      labels: {
        "Danger": 1,
        "Freak": 2,
        "Savior": 0,
        "Superior": -1,
        "Mundane": -2 
      },
      potential: 3,
      conditions: {
          'Afraid': true,
          'Angry': false,
          'Guilty': false,
          'Hopeless': true,
          'Insecure': false
        },
      advancements: [],
      notes: [ { id: 1, title: 'Hello'}]
  },
  mutations: {
    updateLabels (state, { labels }) {
      state.labels = { ...state.labels, ...labels }
    },
    updateCharacterField (state, { field, value }) {
        state[field] = value
    },
    setCondition (state, { condition }) {
        state.conditions[condition] = true
    },
    clearCondition (state, {condition}) {
        state.conditions[condition] = false
    },
    markPotential (state) {
        state.potential++
        if (state.potential === 5) {
          state.potential = 0
          state.advancements.push('advancement')
        }

    }
  },
  actions: {

  }
})
