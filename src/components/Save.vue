<template>
    <form>
        <button v-on:click="save">Save</button>
        <textarea name="data" v-bind:value="data" class="edit"></textarea>
    </form>
</template>
<script>
export default {
    name: 'Save',
    props: ['data'],
    methods: {
        save() {
            this.$emit('saveCharacter')
        }
    }
}
</script>
<style scoped>
.edit {
    max-width: 600px;
    min-height: 200px;
}
</style>

