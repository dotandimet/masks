<template>
    <div>
        <h2>Team Members</h2>
        <p v-for="character in members"
        v-bind:key="character">
        <router-link v-bind:to="'/pc/'+character">{{character}}</router-link>
        </p>
        <button>New</button>
        <button v-on:click="doLoad">Load JSON</button>
        <textarea v-model="load"></textarea>
    </div>
</template>
<script>
export default {
   data() {
       return {
       'load': ''
       }
   },
   computed: {
       members() {
           return this.$store.getters.members
       }
   },
   methods: {
       doLoad() {
            const obj = JSON.parse(this.load)
            if (typeof obj === 'object') { // give it a go...
                this.$store.dispatch('loadCharacter', obj) // and god have mercy
            }
       }
   }

}
</script>
