<template>
<div class="mls-list">
<h2>Conditions</h2>
<div v-for="cond in all_conditions" v-bind:key="cond.name">
<div>
<input type="checkbox" v-bind:checked="value[cond.name]">
❑ ❑
</div>
<div>{{ cond.name }}</div>
<div>{{ cond.description }} </div>
</div>
</div>
    
</template>
<script>
export default {
    name: 'Conditions',
    props: ['value'],
    data: function() {
        return {
            'all_conditions': [
{ 'name': 'Afraid', 'description': '(-2 to directly engage a threat)' },
{ 'name': 'Angry', 'description': '(-2 to comfort or support or pierce the mask)' },
{ 'name': 'Guilty', 'description': '(-2 to provoke someone or assess the situation)' },
{ 'name': 'Hopeless', 'description': '(-2 to unleash your powers)' },
{ 'name': 'Insecure', 'description': '(-2 to defend someone or reject others’ influence)' }
        ] };
    }
}
</script>

