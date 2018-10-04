<template>
<div class="mls-list">
<h2>Stuff</h2>
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
      is="Item"
      v-for="(note, index) in notes"
      v-bind:key="note.id"
      v-bind:title="note.title"
      v-on:remove="notes.splice(index, 1)"
    ></li>
  </ul>
</div>
</template>
<script>
import Item from './Item';

export default {
    name: 'Stuff',
    components: {
        Item
    },
    data: function() {
        return {
    newNoteText: '',
    notes: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextNoteId: 4
  }
  },
  methods: {
    addNewNote: function () {
      this.notes.push({
        id: this.nextNoteId++,
        title: this.newNoteText
      })
      this.newNoteText = ''
    }
  }
}
</script>

