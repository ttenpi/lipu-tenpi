<template>
  <ELBox tag="header">
    <ELSwitcher :class="$style.headerContainer" space="var(--s-1)">
      <div class="font-display">
        <NuxtLink to="/" style="color: var(--color-primary)">tenpi</NuxtLink>
      </div>

      <nav :class="$style.headerCenter">
        <ul>
          <li><NuxtLink to="/mi">about</NuxtLink></li>
          <!-- <li><NuxtLink to="/blog">blog</NuxtLink></li>
            <li><NuxtLink to="/projects">projects</NuxtLink></li> -->
          <li>
            <NuxtLink to="https://tech.lgbt/@daph" rel="me" target="_blank">
              <Icon name="mdi:mastodon" title="Mastodon on tech.lgbt" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://toki.social/@daph" rel="me" target="_blank">
              <Icon name="IconsTokiPona" title="Mastodon on toki.social" />
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div :class="$style.headerEnd">
        <div>
          <label for="colorModePreference">theme:</label>
          <select v-model="$colorMode.preference" id="colorModePreference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="latte">🌻 Latte</option>
            <option value="frappe">🪴 Frappe</option>
            <option value="macchiato">🌺 Macchiato</option>
            <option value="mocha">🌿 Mocha</option>
          </select>
        </div>
      </div>
    </ELSwitcher>
  </ELBox>
</template>

<style module>
  .headerContainer {
    align-items: center;
  }

  .headerCenter {
    flex-grow: 0;
  }

  .headerCenter ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: var(--s-2);
  }

  .headerEnd {
    display: flex;
    justify-content: flex-end;
  }
</style>
