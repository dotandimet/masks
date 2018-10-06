<template>
<div class="mls-list ml">
    <h2>Potential</h2>
    <div  v-for="box in boxes"
      v-bind:key="box"
      class="pot-box">
    <input type="radio"
      v-bind:checked="(box<=value)?true:false"
      v-bind:value="box"
      v-on:click="markPotential"
      >
      </div>
</div>    
</template>
<script>
export default {
    props: { value: Number },
    computed: {
        boxes: function( ) {
            return [1,2,3,4,5];
        }
    },
    methods: {
        markPotential: function(event) {
            if (event.target.value > this.value) {
                this.$emit('input', event.target.value);
            }
        }
    }

}
</script>
<style scoped>
.ml {
    display: grid;
    grid-template-columns: 35% 10% 10% 10% 10% 10% 10%;
    box-sizing: border-box;
}
.pot-box {
    padding-top: 30px;
    background: transparent;
}
.pot-box input {
    background: transparent;
}
</style>