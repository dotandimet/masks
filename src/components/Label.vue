<template>
    <div class="ml">
        <div class="ml-title">{{ title }}</div>
        <div v-for="s in scale" v-bind:key="s"
             v-bind:class="{'ml-value': true,
                            'ml-value-active': (s===value),
                            'ml-down': (s+1===value),
                            'ml-up': (s-1===value),
                            'ml-positive': (s>0)}"
             v-on:click="shiftLabel(s)"
                            >
        {{ s }}

        </div>
    </div>
</template>
<script>
export default {
    name: "MasksLabel",
    props: {
        title: String,
        value: Number
    },
    data: function() { 
        return {
                scale: [-2, -1, 0, 1, 2, 3] 
                }
    },
    computed: {
        canUp: function() { return (this.value < 3) ? true : false },
        canDown: function() { return (this.value > -2) ? true : false },

    },
    methods: {
        shiftLabel: function (new_val) {
            if (new_val+1 === this.value || new_val-1 === this.value) {
                this.$emit('shifted', new_val);
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
    background-color: aqua;
    margin-bottom: 0.3rem;
}
.ml-title, .ml-value {
    font-weight: 900;
    font-size: 120%;
}
.ml-title {
    justify-self: start;
}
.ml-value {
    justify-self: center;
    background-color: aqua;
}
.ml-value-active {
    background-color: white;
    color: slategray;
}
.ml-positive::before {
 content: '+';
}
.ml-up:hover, .ml-down:hover {
    color: white;
    background-color: royalblue;
}
</style>

