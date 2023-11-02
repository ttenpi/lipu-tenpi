<template>
  <div
    :class="[
      $style.cover,
      noPadding ? '' : $style.noPadding
    ]"
    :style="{
      '--space': space,
      '--minHeight': minHeight
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      space?: string
      minHeight?: string
      noPadding?: boolean
    }>(),
    {
      space: "var(--s1)",
      minHeight: "100vh",
      noPadding: false,
    }
  )
</script>

<style module>
  .cover {
    display: flex;
    flex-direction: column;
    min-block-size: var(--minHeight, 100vh);
    padding: var(--space, var(--s1));
  }

  .cover.noPadding {
    padding: 0;
  }

  .cover > * {
    margin-block: var(--space, var(--s1));
  }

  .cover > :first-child:not(:slotted(.coverCentered)) {
    margin-block-start: 0;
  }

  .cover > :last-child:not(:slotted(.coverCentered)) {
    margin-block-end: 0;
  }

  .cover > :slotted(.coverCentered) {
    margin-block: auto;
  }
</style>
