<template>
  <ELCenter :class="$style.mainContainer">
    <ELStack>
      <CommonHeader />
      <ELBox>
        <slot />
      </ELBox>
      <CommonFooter />
    </ELStack>
  </ELCenter>
</template>

<style module>
  .mainContainer {
    margin-block-start: var(--s0);
  }
</style>
