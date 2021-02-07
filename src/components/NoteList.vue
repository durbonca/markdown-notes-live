<template>
  <NodeListItem
    v-for="note in notes"
    :key="note.id"
    :note="note"
    class="p-3 my-4 | border-2 border-white bg-gray-300 shadow-xl rounded-md | cursor-pointer"
  />
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
    return {
      notes: computed(() => store.getters.getNoteBySearchTerm)
    };
  }
};
</script>

<style></style>
