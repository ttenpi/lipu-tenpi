// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=general-sans@701,1,2,401,400,700&f[]=poppins@2,900,901,701,401,400,1,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
      ],
    },
  },
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
    preference: "system",
    fallback: "latte",
    classSuffix: "-theme",
  },
})
