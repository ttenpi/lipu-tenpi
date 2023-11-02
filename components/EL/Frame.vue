<template>
  <div
    :style="{
      '--ratio': numerator / denominator,
    }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      ratio?: string
    }>(),
    {
      ratio: "16:9",
    }
  )

  const [numerator, denominator] = props.ratio.split(":").map(Number)
</script>

<style module>
  .frame {
    aspect-ratio: var(--ratio, math(16 / 9));
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame > img,
  .frame > video {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
</style>
