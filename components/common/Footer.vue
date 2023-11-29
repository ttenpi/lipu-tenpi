<template>
  <footer :class="$style.footer">
    <div :class="$style.stickyContainer">
      <ELBox :class="$style.box">
        <ELStack>
          <ELCenter andText>
            <p>
              <q title="random nonsense">{{ quote }}</q>
            </p>
            <p>designed by daph in the netherlands</p>
            <p>
              <small
                >code licensed under
                <NuxtLink href="/LICENSE.txt" target="_blank">GPLv3</NuxtLink>
                available
                <NuxtLink
                  href="https://github.com/daphatmidnight/lipu-tenpi"
                  target="_blank"
                  >on GitHub <Icon name="mdi:github-box" /></NuxtLink
              ></small>
            </p>
            <p>
              <small
                title="meaning, severely unfinished, and quite broken in some places"
                >this website is under construction</small
              >
            </p>
          </ELCenter>

          <!-- pro-advertising section -->
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
                target="_blank"
                >including cybersecurity agencies</NuxtLink
              >
              &mdash; recommend that internet users use an ad/content blocker to
              protect themselves against scams, malware and surveillance.
            </p>
            <p>
              <strong
                ><NuxtLink
                  to="https://www.w3.org/TR/ethical-web-principles/#render"
                  target="_blank"
                  >The user decides what web content is acceptable in their
                  browser.</NuxtLink
                ></strong
              >
            </p>
            <p>
              <strong
                >Adblocking is not theft. Advertisers don't have a right to the
                internet; only a privilege.</strong
              >
            </p>
            <p>
              Get yourself a good ad blocker such as
              <NuxtLink href="https://ublockorigin.com/" target="_blank"
                >uBlock Origin</NuxtLink
              >.
            </p>
          </ELBox>
          <!-- end pro-advertising section -->
        </ELStack>
      </ELBox>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  const quotes = [
    "daph can make mistakes. verify important information.",
    "guh?",
    "tectonic romance infinite rebirth",
    "when life gives you melons, make melonade then",
    "click here! (it does nothing)",
    "i think those are okay to explode",
    "ask your surgeon about SRS: skeleton removal surgery",
    "when in doubt, go to the uBlock Origin settings, then Filter Lists tab, then Purge all caches (shift-click to force), then Update now",
    "for your health. (disclaimer: im not a doctor)",
    "heavy 'heavy weapons guy' weapons guy",
    "🐄",
    "🐄",
    "🐄",
    "bigger is better",
    "that would be so, if it were not for The Contract",
    "i commit to the bit, always",
    "holy shit. #mileycyrus",
    "i was born on my birthday",
    "(incorrect) (false) (misinfo) (fake news)",
    "time too is a social construct",
    "may eat your gender too",
    "may eat your pronouns too",
    "source: me",
    "i'm convinced that people that do milk after cereal live longer. don't @ me",
    "you say this but have you ever lined up a bunch of burgers into a grid and rested your face on it like a pillow?",
    "@staff-alert",
    "daph 'banned from the usa' Lastname",
    "daph 'ceo of antifa glitch city' Lastname",
    "tongue not for biting !",
    "someone please watch my lettuce while im away 🥬",
    "you look so structurally unsound, imma call OSHA",
    "hatsune miku called me earlier",
    "chatting online is just a form of collaborative poetry",
    "canned gay?",
    "thank you very much.",
    "put an egg on it",
    "design!",
    "it keeps the fingies clean!",
    "mu!",
    "i wake up, i go online, post absurdities, and eat snacks",
  ]

  const quote = quotes[Math.floor(Math.random() * quotes.length)]
</script>

<style module>
  .footer {
    block-size: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .stickyContainer {
    position: sticky;
    bottom: 0;
  }

  .box {
    margin-block-end: var(--s0);
  }
</style>
