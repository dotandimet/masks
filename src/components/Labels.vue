<template>
    <div class="mls-list">
        <h2>Labels</h2>
        <div>{{ msg }}</div>
        <MasksLabel v-for="title in titles"
            v-bind:title="title"
             v-bind:value="value[title]"
             v-bind:key="title"
             v-on:shifted="updateLabel(title, $event)"
             > </MasksLabel>       
    </div>
</template>
<script>
import MasksLabel from "./Label.vue";
export default {
  name: "Labels",
  props: {
    value: Object
  },
  data: function() {
    return {
      titles: [ "Danger", "Freak", "Savior", "Superior", "Mundane" ],
      msg: ''
    };
  },
  computed: {
      all_labels: function() { return this.value.join(', '); }
  },
  methods: {
    alert: function(notice) {
        this.msg = notice;
    },
    updateLabel: function(label, new_val) {
        let newLabels = { ...this.value }
        newLabels[label] = new_val
        this.$emit('input', newLabels)

    },
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
