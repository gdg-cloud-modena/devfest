// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  // tailwindcss: {
  //   cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
  //   configPath: 'tailwind.config',
  //   exposeConfig: {
  //     level: 2
  //   },
  //   config: {},
  //   viewer: true,
  // },
  app: {
    head: {
      script: [
        {src: 'https://sa.devfest.modena.it/latest.js', "data-collect-dnt": "true", async: true, defer: true, body: true},
        {src: 'https://sa.devfest.modena.it/auto-events.js', async: true, body: true },
      ],
      noscript: [
        { children: '<img src="https://sa.devfest.modena.it/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />', body: true }
      ]
    }
  },
})

