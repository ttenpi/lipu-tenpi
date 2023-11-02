<template>
  <div>
    <header>
      <ELBox>
        daph
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="about">about</NuxtLink>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="latte">🌻 Latte</option>
          <option value="frappe">🪴 Frappe</option>
          <option value="macchiato">🌺 Macchiato</option>
          <option value="mocha">🌿 Mocha</option>
        </select>
        {{ $colorMode.value }}
      </ELBox>
    </header>
  </div>
</template>
