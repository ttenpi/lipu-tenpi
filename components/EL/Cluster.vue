<template>
  <div
    :class="[
      $style.cluster,
    ]"
    :style="{
      '--justify': justify,
      '--align': align,
      '--space': space
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      justify?: string
      align?: string
      space?: string
    }>(),
    {
      justify: "flex-start",
      align: "flex-start",
      space: "var(--s1)",
    }
  )
</script>

<style module>
  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, var(--s1));
    justify-content: var(--justify, flex-start);
    align-items: var(--align, flex-start);
  }
</style>
