<template>
    <div class="mls-list">
        <h2>Labels</h2>
        <MasksLabel v-for="label in labels"
            v-bind:title="label.title"
             v-bind:value="label.value"
             v-bind:key="label.title"
             > </MasksLabel>       
    </div>
</template>
<script>
import MasksLabel from './Label.vue';
export default {
    name: 'Labels',
    data: function() {
        return {
        labels: [
            { title: 'Danger', value: 0 },
            { title: 'Freak', value: 0 },
            { title: 'Savior', value: 0 },
            { title: 'Superior', value: 0 },
            { title: 'Mundane', value: 0 }
        ]
    } 
    },
    components: {
        MasksLabel
    }
}
</script>
<style scoped>
.mls-list {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    flex-basis: 50px;
    justify-content: flex-start;
}
.mls-list h2 {
    text-align: start;
}
</style>
