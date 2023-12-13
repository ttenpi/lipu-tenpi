<template>
  <main>
    <ContentDoc :class="$style.content" tag="article" />
  </main>
</template>

<style module>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .content > * {
    margin-block: 0;
  }

  .content > * + * {
    margin-block-start: var(--space, var(--s0));
  }
</style>
