// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  //main.css config for tailwindcss
  css: ['./assets/css/main.css'],

  //postcss for tailwindcss
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    //head links
    head: {
      link: [
        //favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      htmlAttrs: {
        //daisyui default theme
        'data-theme': 'dracula',
      },
    }
  },

  //modules
  modules: [
  ]
})
