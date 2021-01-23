<template>
<li v-for="note in notes" :key="note.id">
    {{ note.body }}
</li>
</template>

<script> 
export default {
}
</script>

<style></style>
