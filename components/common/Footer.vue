<template>
  <ELBox>
    <footer>
      <ELCenter andText>
        <p>
          <q title="random nonsense">{{ quote }}</q>
        </p>
        <p>tenpi is created by daph</p>
        <small>code licensed under <a href="/LICENSE">GPLv3</a></small>
      </ELCenter>
    </footer>
  </ELBox>
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
    "for your health. (im not a doctor)",
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
    "please don't take absolutely everything i say seriously",
    "may eat your gender too",
    "may eat your pronouns too",
    "source: me",
    "i'm convinced that people that do milk after cereal live longer. don't @ me",
    "you say this but have you ever lined up a bunch of burgers into a grid and rested your face on it like a pillow?",
    "@staff-alert",
    "daph 'banned from the usa' Lastname",
    "tongue not for biting !",
    "someone please watch my lettuce while im away 🥬",
    "you look so structurally unsound, imma call OSHA",
    "hatsune miku called me earlier",
    "chatting online is just a form of collaborative poetry",
    "canned gay?",
    "thank you very much.",
    "put an egg on it",
    "design!"
  ]

  const quote = quotes[Math.floor(Math.random() * quotes.length)]
</script>
