<template>
  <div>
    <ELBox
      id="ad_container"
      style="
        border-color: var(--ctp-yellow);
        border-width: 4px;
        font-size: var(--s-1);
      ">
      <p class="font-display">
        <Icon name="ph:circle-wavy-warning-fill" /> Blocking ads is good!
      </p>
      <p>
        Security experts around the world &mdash;
        <NuxtLink
          to="https://techcrunch.com/2022/12/22/fbi-ad-blocker/"
          target="_blank">
          including cybersecurity agencies
        </NuxtLink>
        &mdash; recommend that internet users use an ad/content blocker to
        protect themselves against scams, malware and surveillance.
      </p>
      <p>
        <strong
          ><NuxtLink
            to="https://www.w3.org/TR/ethical-web-principles/#render"
            target="_blank">
            The user decides what web content is acceptable in their browser.
          </NuxtLink></strong
        >
      </p>
      <p>
        <strong>
          Adblocking is not theft. Advertisers don't have a right to the
          internet; only a privilege.
        </strong>
      </p>
      <p>
        Get yourself a good ad blocker such as
        <NuxtLink href="https://ublockorigin.com/" target="_blank">
          uBlock Origin
        </NuxtLink>
        .
      </p>
    </ELBox>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
