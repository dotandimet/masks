<template>
    <div class="mls-list">
        <h2>Labels</h2>
        <div>{{ msg }}</div>
        <MasksLabel v-for="(label, index) in value"
            v-bind:title="titles[index].title"
             v-bind:value="label"
             v-bind:key="label.title"
             v-on:shifted="updateLabel(index, $event)"
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
      ],
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
    updateLabel: function(index, label) {
        let newArray = this.value.map( (x,i) => (i===index) ? label : x );
        this.alert("Values: "+ this.value.join(',') + "Index: " + index + ", label: " + label + " labels: " + newArray.join(','));
        this.$emit('input', newArray);
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
