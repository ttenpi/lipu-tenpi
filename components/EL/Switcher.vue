<template>
  <component
    :is="tag"
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
  </component>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      tag?: string
      threshold?: string
      space?: string
      limit?: number
    }>(),
    {
      tag: "div",
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
