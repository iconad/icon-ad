import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: [
        "~/assets/css/tailwind.css",
        "~/assets/css/app.scss"
    ],

    build: {
        postcss: {
          postcssOptions: require("./postcss.config.js"),
        },
    },

    buildModules: [
      '@pinia/nuxt',
    ],


  })
