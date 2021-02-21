<template>
  <DeleteNote v-if="$store.state.deleting" />
  <div
    v-if="$store.state.user"
    class="container | min-h-1/2 p-3 my-3 mx-auto | bg-white rounded-xl shadow-2xl | flex"
  >
    <!--left side-->
    <section class="w-1/4 p-3 mr-3 | bg-gray-100">
      <!-- logout -->
      <a
        @click="$store.dispatch('userLogout')"
        class="underline text-center block font-bold mb-2"
        href="#"
        >Log Out</a
      >
      <!--search notes-->
      <SearchNote />
      <!-- note list -->
      <NoteList />
    </section>
    <!-- right side -->
    <section class="p-3 | flex-grow">
      <ActiveNote />
    </section>
  </div>
  <div v-else>
    <a
      @click="$store.dispatch('userLogin')"
      class="w-full h-screen | flex justify-center items-center underline"
      href="#"
      >Login Please</a
    >
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import ActiveNote from "@/components/ActiveNote.vue";
import DeleteNote from "@/components/DeleteNote.vue";
import SearchNote from "@/components/SearchNote.vue";
export default {
  name: "App",
  components: { NoteList, ActiveNote, DeleteNote, SearchNote }
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
