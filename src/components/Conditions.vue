<template>
<div class="mls-list">
<h2>Conditions</h2>
<div v-for="cond in all_conditions" v-bind:key="cond.name" class="ml-cond">
<input type="checkbox" 
       v-model="value[cond.name]"
       v-on:change="conditionChange"
       v-bind:id="cond.name">
<!-- ❑ ❑ -->
<label v-bind:for="cond.name">{{ cond.name }}</label>
<div>{{ cond.description }} </div>
</div>
</div>
    
</template>
<script>
export default {
    name: 'Conditions',
    props: { 'value': Object },
    data: function() {
        return {
            'all_conditions': [
{ 'name': 'Afraid', 'description': '(-2 to directly engage a threat)' },
{ 'name': 'Angry', 'description': '(-2 to comfort or support or pierce the mask)' },
{ 'name': 'Guilty', 'description': '(-2 to provoke someone or assess the situation)' },
{ 'name': 'Hopeless', 'description': '(-2 to unleash your powers)' },
{ 'name': 'Insecure', 'description': '(-2 to defend someone or reject others’ influence)' }
        ] };
    },
    methods: {
        conditionChange(event) {
            if (event.target.checked) {
                this.$emit('mark', event.target.id)
            }
            else {
                this.$emit('clear', event.target.id)
            }
        }
    }
}
</script>
<style scoped>
.ml-cond {   
    display: grid;
    grid-template-columns: 10% 20% 1fr;
    box-sizing: border-box;
    text-align: start;
}
div > input[type="checkbox"]:checked ~ label,
input[type="checkbox"]:checked ~ div
 {
    font-weight: bold;
}
</style>
