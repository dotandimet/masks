<template>
    <span>
    <input v-if="editMode" v-on:input="update" v-on:keyup.enter="unedit" v-on:blur="unedit" :value="val" />
    <span v-if="!editMode" v-on:dblclick="edit">{{ val }}</span>
    </span>
</template>
<script>
export default {
  name: 'Editable',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      editMode: false,
      currentText: ''
    }
  },
  computed: {
    val: function () {
      return this.currentText || this.value
    }
  },
  methods: {
    edit () {
      this.editMode = true
    },
    update (e) {
      this.currentText = e.target.value
    },
    unedit () {
      this.editMode = false
      this.$emit('input', this.currentText)
    }
  }
}
</script>
