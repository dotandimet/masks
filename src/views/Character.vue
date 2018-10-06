<template>
  <div class="character">
    <h2><Editable v-model="name"></Editable></h2>
    <dl class="info">
      <dt>Archtype:</dt><dd><Editable v-model="archtype"></Editable></dd>
      <dt>Real Name:</dt><dd><Editable v-model="real_name"></Editable></dd>
    </dl>
    <Labels v-model="labels"></Labels>
    <Conditions v-bind:value="conditions"
    v-on:mark="setCondition"
    v-on:clear="clearCondition"></Conditions>
    <Potential v-model="potential"></Potential>
    <div><b>Advancements:</b><span>{{ advancements.length }}</span></div>
    <Moves></Moves>
    <Notes v-model="notes"></Notes>
  </div>
</template>

<script>
// @ is an alias to /src
import Labels from '@/components/Labels.vue'
import Conditions from '@/components/Conditions.vue'
import Potential from '@/components/Potential.vue'
import Moves from '@/components/Moves.vue'
import Notes from '@/components/Notes.vue'
import Editable from '@/components/Editable.vue'

import { mapState } from 'vuex'

export default {
  name: 'Character',
  props: ['character'],
  components: {
    Labels,
    Conditions,
    Moves,
    Potential,
    Notes,
    Editable
  },
  computed: {
    ...mapState({
    conditions(state) { return state.conditions },
    advancements(state) { return state.advancements },
    notes(state) { return state.notes }
  }),
    potential: {
      get() {
        return this.$store.state.potential
      },
      set(value) {
        this.$store.commit({type: 'markPotential'})
      }
    },
    labels: {
      get() {
        return this.$store.state.labels
      },
      set(value) {
        this.$store.commit({type: 'updateLabels', labels: value})
      }
    },
    name: {
      get() {
        return this.$store.state.name
        },
      set(value) {
        this.$store.commit({ type: 'updateCharacterField',
                             field: 'name',
                             value: value
                             })
      }
    },
    real_name: {
      get() {
        return this.$store.state.real_name
        },
      set(value) {
        this.$store.commit({ type: 'updateCharacterField',
                             field: 'real_name',
                             value: value
                             })
      }
    },
    archtype: {
      get() {
        return this.$store.state.archtype
        },
      set(value) {
        this.$store.commit({ type: 'updateCharacterField',
                             field: 'archtype',
                             value: value
                             })
      }
    },
  },
  methods: {
    setCondition(cond){
      this.$store.commit({ type: 'setCondition', condition: cond})
    },
    clearCondition(cond){
      this.$store.commit({ type: 'clearCondition', condition: cond})
    },
  },
  data: function() {
    return {

    }
  }
}
</script>
<style scoped>
.info { 
  text-align: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 600px;
}
</style>

