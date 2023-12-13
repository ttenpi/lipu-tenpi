<template>
  <component
    :is="tag"
    :class="[
      $style.stack,
      recursive ? $style.recursive : '',
      splitAfter ? $style.splitAfter : '',
    ]"
    :style="{
      '--space': space,
      '--splitAfter': splitAfter
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      tag?: string
      space?: string
      recursive?: boolean
      splitAfter?: number
    }>(),
    {
      tag: "div",
      space: "var(--s0)",
      recursive: false,
      splitAfter: 0,
    }
  )
</script>

<style module>
  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > *,
  .recursive * {
    margin-block: 0;
  }

  .stack > * + *,
  .recursive * + * {
    margin-block-start: var(--space, var(--s0));
  }

  .splitAfter:only-child {
    block-size: 100%;
  }

  .splitAfter > :nth-child(var(--splitAfter)) {
    margin-block-end: auto;
  }
</style>
