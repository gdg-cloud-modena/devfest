// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      script: [{src: 'https://www.eventbrite.it/static/widgets/eb_widgets.js'}]
    }
  }
})
