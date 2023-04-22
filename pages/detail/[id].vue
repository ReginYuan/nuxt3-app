<template>
  <h1>{{ title }}</h1>
  <div v-html="content"></div>
</template>
<script setup lang="ts">
const router = useRoute();
const { title, content } = await $fetch(`/api/detail/${router.params.id}`);
</script>
