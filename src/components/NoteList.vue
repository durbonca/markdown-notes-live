<template>
  <NodeListItem />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NodeListItem from "./NodeListItem.vue";

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
