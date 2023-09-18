<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} – tenpi` : "jan tenpi"
    },
  })
</script>

<style>
  body {
    background: var(--ctp-crust);
    color: var(--ctp-text);
  }
</style>
