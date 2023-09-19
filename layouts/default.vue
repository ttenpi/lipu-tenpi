<template>
  <div>
    Insert state mandated header here.
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="latte">🌻 Latte</option>
      <option value="frappe">🪴 Frappe</option>
      <option value="macchiato">🌺 Macchiato</option>
      <option value="mocha">🌿 Mocha</option>
    </select>
    <hr />
    <slot />
    <hr />
    Insert state mandated footer here.
  </div>
</template>
