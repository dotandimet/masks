<template>
    <div class="mls-list">
        <h2>Labels</h2>
        <MasksLabel v-for="(label, index) in value"
            v-bind:title="titles[index].title"
             v-bind:value="label"
             v-bind:key="label.title"
             > </MasksLabel>       
    </div>
</template>
<script>
import MasksLabel from "./Label.vue";
export default {
  name: "Labels",
  props: {
    value: Array
  },
  data: function() {
    return {
      titles: [
        { title: "Danger", value: 0 },
        { title: "Freak", value: 0 },
        { title: "Savior", value: 0 },
        { title: "Superior", value: 0 },
        { title: "Mundane", value: 0 }
      ]
    };
  },
  computed: {
      all_labels: function() { return this.value.join(', '); }
  },
  methods: {
    shiftLabels: function(up, down) { 
        let up_i = this.titles.findIndex( (item) => item.title === up );    
        let down_i = this.titles.findIndex( (item) => item.title === down );
        this.$props.value[up_i]++;
        this.$props.value[down_i]--;
    }
  },
  components: {
    MasksLabel
  }
};
</script>
<style>
</style>
