<template>
  <component
    :is="tag"
    :class="[
      $style.sidebar,
      side === 'left' ? $style.left : '',
      side === 'right' ? $style.right : '',
      noStretch ? $style.noStretch : ''
    ]"
    :style="{
      '--sideWidth': sideWidth,
      '--contentMin': contentMin,
      '--space': space
    }"
  >
    <slot name="side" />
    <slot name="content" />
  </component>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      tag?: string
      side?: string
      sideWidth?: string
      contentMin?: string
      space?: string
      noStretch?: boolean
    }>(),
    {
      tag: "div",
      side: "left",
      sideWidth: "",
      contentMin: "50%",
      space: "var(--s1)",
      noStretch: false
    }
  )
</script>

<style module>
  .sidebar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, var(--s1));
  }

  .sidebar.noStretch {
    align-items: flex-start;
  }

  .sidebar > :first-child,
  .sidebar.right > :last-child {
    flex-basis: var(--sideWidth,);
    flex-grow: 1;
  }

  .sidebar > :last-child,
  .sidebar.right > :first-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: var(--contentMin, 50%);
  }
</style>
