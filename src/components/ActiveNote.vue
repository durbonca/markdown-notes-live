<template>
  <div v-if="activeNote" class="h-full | flex  flex-col">
    <!-- edition actions -->
    <div class="flex-1 flex">
      <section class="flex-1">
        <ActiveNoteMD
          v-model:body="activeNote.body"
          @blur-note="blurNote"
          @update:body="updateNote"
          class="w-full h-full | bg-gray-200 | p-3"
        />
      </section>
      <ActiveNoteHTML
        class="bg-gray-900 text-white | p-3 | flex-1"
        :body="activeNote.body"
      />
    </div>
    <!-- notes info and actions -->
    <section class="mt-3 | flex justify-between items-center">
      <div class="text-sm">
        Created on {{ noteDate }}. Contains {{ noteLength }} words
      </div>
      <div>
        <a
          href="#"
          @click="deleteNote"
          class="py-1 px-3 mr-3 | text-red-500 rounded-md"
          >Delete Note</a
        >
        <a
          href="#"
          @click="closeNote"
          class="py-1 px-3 | bg-gray-200 rounded-md"
          >Close Note</a
        >
      </div>
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
    const updateNote = value =>
      store.dispatch("updateNote", {
        id: activeNote.value.id,
        body: value
      });
    const closeNote = () => store.commit("setActiveNote");
    const deleteNote = () => store.commit("setDeleting", true);
    const createNote = () => store.dispatch("createNote");
    const blurNote = value => !value.length && deleteNote();
    return {
      activeNote,
      updateNote,
      closeNote,
      createNote,
      deleteNote,
      blurNote,
      noteDate: computed(() => new Date(activeNote.value.id).toLocaleString()),
      noteLength: computed(() => activeNote.value.body.split(/\W+/).length)
    };
  }
};
</script>
