<template>
  <div
    :class="[$style.box, invert ? colorModeClass : '']"
    :style="{
      '--padding': padding,
      '--borderWidth': borderWidth,
    }">
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
      padding: "var(--s1)",
      borderWidth: "var(--border-thin)",
      invert: false,
    }
  )

  const colorMode = useColorMode()
  const colorModeClass = computed(() => {
    if (colorMode.value === "light" || colorMode.value === "latte") {
      return "dark-theme"
    } else {
      return "light-theme"
    }
  })
</script>

<style module>
  .box {
    padding: var(--padding, var(--s1));
    --border-thin: 2px;
    border: var(--borderWidth, var(--border-thin)) solid var(--ctp-text);

    background-color: var(--ctp-mantle);
    color: var(--ctp-text);
  }

  .box.invert {
    color: var(--color-light);
    background-color: var(--color-dark);
  }
</style>
