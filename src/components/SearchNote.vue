<template>
  <input
    v-model="SearchTerm"
    type="search"
    placeholder="Search Note"
    class="w-full | p-2 | rounded-md"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SearchNote",

  setup() {
    const store = useStore();
    const SearchTerm = computed({
      get: () => store.state.SearchTerm,
      set: value => store.commit("setSearchTerm", value)
    });
    return { SearchTerm };
  }
};
</script>
