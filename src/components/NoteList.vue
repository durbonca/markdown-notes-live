<template>
  <NodeListItem v-for="note in notes" :key="note.id" :note="note" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NodeListItem from "@/components/NodeListItem.vue";

export default {
  name: "NoteList",
  components: { NodeListItem },
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
