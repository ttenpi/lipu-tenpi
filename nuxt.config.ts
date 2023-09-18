// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/style.css"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  modules: ["@nuxt/content", "nuxt-icon", "@nuxtjs/color-mode"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'latte',
    classSuffix: '-theme'
  }
})
