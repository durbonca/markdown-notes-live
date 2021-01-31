<template>
  <div v-if="activeNote" class="h-full | flex  flex-col ">
    <!-- edition actions -->
    <div class="flex-1 flex">
      <section class="flex-1">
        <ActiveNoteMD
          v-model:body="activeNote.body"
          class="w-full h-full | bg-gray-200 | p-3"
        />
      </section>
      <ActiveNoteHTML
        class="bg-gray-900 text-white | p-3 | flex-1"
        :body="activeNote.body"
      />
    </div>
    <!-- notes info and actions -->
    <section class="mt-3 | flex justify-end">
      <a href="#" @click="closeNote" class="bg-gray-200 py-1 px-3 rounded-md"
        >Close Note</a
      >
    </section>
  </div>
  <div v-else class="h-full | flex justify-center items-center ">
    please select a note to start editing or
    <a @click="createNote" class="undeline font-bold" href="#"
      >&nbsp; create a note
    </a>
    &nbsp; ✍
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ActiveNoteHTML from "@/components/ActiveNoteHTML.vue";
import ActiveNoteMD from "@/components/ActiveNoteMD.vue";
export default {
  name: "ActiveNote",
  components: {
    ActiveNoteHTML,
    ActiveNoteMD
  },
  setup() {
    const store = useStore();
    const activeNote = computed(() =>
      store.state.activeNote
        ? store.getters.getNoteById(store.state.activeNote)
        : null
    );
    const updateNote = $event =>
      store.commit("updateNote", {
        id: activeNote.value.id,
        body: $event.target.value
      });
    const closeNote = () => store.commit("setActiveNote");
    const createNote = () => store.dispatch("createNote");
    return {
      activeNote,
      updateNote,
      closeNote,
      createNote
    };
  }
};
</script>
