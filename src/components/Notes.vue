<template>
<div class="mls-list">
<h2>Notes</h2>
  <form v-on:submit.prevent="addNewNote">
    <label for="new-note">Add a note</label>
    <input
      v-model="newNoteText"
      id="new-note"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      is="Note"
      v-for="(note, index) in value"
      v-bind:key="note.id"
      v-bind:title="note.title"
      v-on:remove="removeNote(index)"
    ></li>
  </ul>
</div>
</template>
<script>
import Note from './Note';

export default {
    name: 'Notes',
    components: {
        Note
    },
    props: ['value'],
    data: function() {
        return {
         newNoteText: '',
         nextNoteId: this.value.length+1
      }
  },
  methods: {
    addNewNote: function () {
      let notes = Array.from(this.value);
      notes.push({
        id: this.nextNoteId++,
        title: this.newNoteText
      });
      this.$emit('input', notes);
      this.newNoteText = ''
    },
    removeNote: function(index){
      let notes = Array.from(this.value);
      notes.splice(index, 1);
      this.$emit('input', notes);
    }
  }
}
</script>

