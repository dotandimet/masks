<template>
  <div class="home">
    <Labels v-model="labels"></Labels>
    <Conditions v-model="conditions"></Conditions>
    <Potential v-model="potential"></Potential>
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

export default {
  name: 'Character',
  components: {
    Labels,
    Conditions,
    Moves,
    Potential,
    Notes
  },
  data: function() {
    return {
      labels: [ 1, 2, 0, -1, -2 ],
      potential: 3,
      conditions: {'Afraid': true, 'Hopeless': true, 'Insecure': false},
      advancements: [],
      notes: [ { id: 1, title: 'Hello'}]
    }
  }
}
</script>
