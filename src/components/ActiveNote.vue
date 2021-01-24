<template>
  <div class="h-full | flex items-stretch">
    <section class="flex-1 |">
      <textarea
        v-if="activeNote"
        :value="activeNote"
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
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ActiveNote",
  setup() {
    const store = useStore();
    return {
      activeNote: computed(() =>
        store.state.activeNote
          ? store.getters.getNoteById(store.state.activeNote).body
          : null
      )
    };
  }
};
</script>
