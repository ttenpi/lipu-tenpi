<template>
  <div>
    <header>
      <ELBox>
        <ELSwitcher>
          <div>daph</div>
          <div><NuxtLink to="/">home</NuxtLink></div>
          <div><NuxtLink to="about">about</NuxtLink></div>
          <div>
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
  </div>
</template>
