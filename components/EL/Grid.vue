<template>
  <component
    :is="tag"
    :class="[$style.grid]"
    :style="{
      '--space': space,
      '--min': min,
    }"></component>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      tag?: string
      space?: string
      min?: string
    }>(),
    {
      tag: "div",
      space: "var(--s1)",
      min: "250px",
    }
  )
</script>

<style module>
  .grid {
    display: grid;
    gap: var(--space, var(--s1));
  }

  @supports (width: min(var(--min, 250px), 100%)) {
    .grid {
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(var(--min, 250px), 100%), 1fr)
      );
    }
  }
</style>
