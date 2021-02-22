<template>
  <transition name="fade" mode="out-in">
    <div v-if="activeNote" class="h-full | flex  flex-col">
      <!-- edition actions -->
      <div class="flex-1 md:flex">
        <section class="flex-1">
          <ActiveNoteMD
            v-model:body="activeNote.body"
            @blur-note="blurNote"
            @update:body="updateNote"
            class="min-h-1/4 w-full h-full | bg-gray-200 | p-3"
          />
        </section>
        <ActiveNoteHTML
          class="min-h-1/4 bg-gray-900 text-white | p-3 | flex-1"
          :body="activeNote.body"
        />
      </div>
      <!-- notes info and actions -->
      <section
        class="mr-3 mt-3 | flex flex-col md:flex-row justify-between items-center"
      >
        <div class="text-sm mb-3 sm:mb-0">
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
  </transition>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import debounce from "lodash/debounce";
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
    const updateNote = debounce(
      value =>
        store.dispatch("updateNote", {
          id: activeNote.value.id,
          body: value
        }),
      2000
    );
    const closeNote = () => store.commit("setActiveNote");
    const deleteNote = () => store.commit("setDeleting", true);
    const createNote = () => store.dispatch("createNote");
    const blurNote = value => !value.length && store.dispatch("deleteNote");
    return {
      activeNote,
      updateNote,
      closeNote,
      createNote,
      deleteNote,
      blurNote,
      noteDate: computed(
        () =>
          activeNote.value &&
          new Date(activeNote.value.createdAt).toLocaleString()
      ),
      noteLength: computed(
        () => activeNote.value && activeNote.value.body.split(/\W+/).length
      )
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
