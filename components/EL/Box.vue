<template>
  <div
    :class="[
      $style.box,
      invert ? $style.invert : '',
    ]"
    :style="{ '--padding': padding, '--borderWidth': borderWidth }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      padding?: string
      borderWidth?: string
      invert?: boolean
    }>(),
    {
      padding: "var(--s0)",
      borderWidth: 'var(--border-thin)',
      invert: false,
    }
  )
</script>

<style module>
  .box {
    padding: var(--s0);
    border: var(--border-thin) solid;
    --color-light: #fff;
    --color-dark: #000;
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  .box * {
    color: inherit;
  }

  .box.invert {
    color: var(--color-light);
    background-color: var(--color-dark);
  }
</style>
