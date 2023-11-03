<template>
  <div
    :class="[
      $style.switcher,
    ]"
    :style="{
      '--threshold': threshold,
      '--space': space,
      '--limit': limit
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      threshold?: string
      space?: string
      limit?: number
    }>(),
    {
      threshold: "30rem",
      space: "var(--s1)",
      limit: 4
    }
  )
</script>

<style module>
  .switcher {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, var(--s1));
  }

  .switcher > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold, var(--measure)) - 100%) * 999);
  }

  .switcher > :nth-child(n + var(--limit, 4)),
  .switcher > :nth-child(n + var(--limit, 4)) ~ * {
    flex-basis: 100%;
  }
</style>
