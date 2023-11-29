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
  :root {
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary) var(--ctp-subtext0);
  }

  body {
    background: var(--ctp-crust);
    color: var(--ctp-text);
    padding-inline-start: 1em;
    padding-inline-end: 1em;
  }
</style>
