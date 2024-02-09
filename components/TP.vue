<template>
  <component :is="tag" :lang="[sp ? 'tok-x-stlnpona' : 'tok-Latn']">
    <slot />
  </component>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      tag?: string
      sp?: boolean
    }>(),
    {
      tag: "span",
      sp: false,
    }
  )
</script>
