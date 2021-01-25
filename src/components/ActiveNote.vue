<template>
  <div v-if="activeNote" class="h-full | flex  flex-col ">
    <!-- edition actions -->
    <div class="flex-1 flex">
      <section class="flex-1 | flex ">
        <textarea
          v-if="activeNote"
          :value="activeNote.body"
          @input="updateNote"
          class="w-full h-full | bg-gray-200 | p-3"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </section>
      <article class="bg-gray-900 text-white | p-3 | flex-1">
        HTML will be here
      </article>
    </div>
    <!-- notes info and actions -->
    <section class="mt-3 | flex justify-end">
      <a href="#">Close notes</a>
    </section>
  </div>
  <div v-else class="h-full | flex justify-center items-center ">
    please select a note to start editing ✍
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ActiveNote",
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
    return {
      activeNote,
      updateNote
    };
  }
};
</script>
