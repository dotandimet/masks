import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
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
    potential: 0,
    conditions: {
      'Afraid': true,
      'Angry': false,
      'Guilty': false,
      'Hopeless': true,
      'Insecure': false
    },
    advancements: [],
    notes: [{
      id: 1,
      title: 'Hello'
    }],
    team: { 'Demo Boy': '' }
   }
  },
  mutations: {
    updateLabels(state, {
      labels
    }) {
      state.labels = { ...state.labels,
        ...labels
      }
    },
    updateCharacterField(state, {
      field,
      value
    }) {
      state[field] = value
    },
    setCondition(state, {
      condition
    }) {
      state.conditions[condition] = true
    },
    clearCondition(state, {
      condition
    }) {
      state.conditions[condition] = false
    },
    markPotential(state) {
      state.potential++
      if (state.potential === 5) {
        state.potential = 0
        state.advancements.push('advancement')
      }
    },
    addNote(state, { note }) {
      state.notes.push(note)
    },
    removeNote(state, { index }) {
      state.notes.splice(index, 1);
    },
    swapCharacter(state, noob) {
      state.archtype = noob.archtype
      state.name = noob.name
      state.real_name = noob.real_name
      state.advancements = noob.advancements
      state.conditions = noob.conditions
      state.potential = noob.potential
      state.labels = noob.labels
      state.notes = noob.notes
    },
    updateTeam(state, {name, data}) {
      Vue.$set(state.team, name, data)
    }
  },
  getters: {
    members({ team }) {
        return Object.keys(team)
    },
    serialize(context) {
      let {
        archtype,
        name,
        real_name,
        advancements,
        conditions,
        potential,
        labels,
        notes
      } = context
      return JSON.stringify({
        archtype,
        name,
        real_name,
        advancements,
        conditions,
        potential,
        labels,
        notes
      })
    }
  },
  actions: {
    loadCharacter({state, commit, getters}, noob) {
      commit({ type: 'updateTeam', name: state.name, data: getters.serialize })
      commit('swapCharacter', noob)
    }
  }
})