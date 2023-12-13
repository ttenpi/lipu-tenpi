<template>
  <component
    :is="tag"
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
  </component>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      tag?: string
      justify?: string
      align?: string
      space?: string
    }>(),
    {
      tag: "div",
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
