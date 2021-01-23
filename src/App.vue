<template>
  <div class="dev | container | p-3 my-3 mx-auto | flex">
    <!--left side-->
    <section class="dev | w-1/4 p-3 mr-3">
      <!--search notes-->
      <p>search notes</p>
      <!-- note list -->
      <NoteList />
    </section>
    <!-- right side -->
    <section class="dev | p-3 | flex-grow">
      <ActiveNote />
    </section>
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import ActiveNote from "@/components/ActiveNote.vue";
export default {
  name: "App",
  components: { NoteList, ActiveNote }
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
