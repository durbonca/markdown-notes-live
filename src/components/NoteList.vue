<template>
  <ul>
    <li v-for="note in notes" :key="note.id">
      {{ note.body }}
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "NoteList",
  setup() {
    const store = useStore();
    //const notes = computed(() => store.state.notes);
    return {
      notes: computed(() => store.state.notes)
    };
  }
};
</script>

<style></style>
