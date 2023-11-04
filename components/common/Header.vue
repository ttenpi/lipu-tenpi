<template>
  <header :class="$style.header">
    <ELBox>
      <ELSwitcher>
        <div class="font-display">daph</div>
        <div><NuxtLink to="/">home</NuxtLink></div>
        <!-- <div><NuxtLink to="/about">about</NuxtLink></div> -->
        <div>
          theme:
          <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="latte">🌻 Latte</option>
            <option value="frappe">🪴 Frappe</option>
            <option value="macchiato">🌺 Macchiato</option>
            <option value="mocha">🌿 Mocha</option>
          </select>
        </div>
      </ELSwitcher>
    </ELBox>
  </header>
</template>

<style module>
  .header {
    margin-block-start: var(--s0);
  }
</style>
