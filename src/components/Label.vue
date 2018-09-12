<template>
    <div class="ml">
        <div class="ml-title">{{ title }}</div>
        <button class="ml-down">-</button>
        <div class="ml-value">{{ value }}</div>
        <button class="ml-up">+</button>
    </div>
</template>
<script>
export default {
    name: "MasksLabel",
    props: {
        title: String,
        value: Number
    },
    computed: {
        canUp: function() { return (this.value < 3) ? true : false },
        canDown: function() { return (this.value > -3) ? true : false }
    },
    methods: {
        shiftUp: function () {
            
        }
    }
}
</script>
<style scoped>
.ml {
    display: grid;
    grid-template-columns: 35% 10% 15% 10%;
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
}
.ml-up {
    justify-self: end;
}
.ml-down {
    justify-self: start;
}
.ml-up, .ml-down {
    background-color: aqua;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 3px double white;
    box-shadow: 0px 0px 10px silver;
    outline: none;
}
</style>

