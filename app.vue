<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <SpeedInsights />
</template>

<script setup lang="ts">
  import { SpeedInsights } from "@vercel/speed-insights/nuxt"

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
    padding-inline-start: var(--s0);
    padding-inline-end: var(--s0);
  }
</style>
