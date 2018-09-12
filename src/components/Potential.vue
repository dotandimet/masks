<template>
<div>
    <h2>Potential</h2>
    <input type="radio" v-for="box in boxes" v-bind:checked="(box<=value)?true:false" v-bind:key="box">
</div>    
</template>
<script>
export default {
    props: { value: Number },
    computed: {
        boxes: function( ) {
            return [1,2,3,4,5];
        }
    }

}
</script>
