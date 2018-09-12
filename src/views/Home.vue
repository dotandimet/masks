<template>
  <div class="home">
    <Labels></Labels>
    <Conditions></Conditions>
    <Potential></Potential>
    <Moves></Moves>
    <Stuff></Stuff>
  </div>
</template>

<script>
// @ is an alias to /src
import Labels from '@/components/Labels.vue'
import Conditions from '@/components/Conditions.vue'
import Potential from '@/components/Potential.vue'
import Moves from '@/components/Moves.vue'
import Stuff from '@/components/Stuff.vue'

export default {
  name: 'home',
  components: {
    Labels,
    Conditions,
    Moves,
    Potential,
    Stuff
  }
}
</script>
