// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hi Im chaoowen',
      meta: [
        {
          name: 'description',
          content: 'Welcome! This is chaowen self-introduction website! 很高興認識你',
        },
      ],
    },
    baseURL: '/nuxt3-base/',
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  plugins: ['~/plugins/pinia.ts'],

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    // https://github.com/nuxt/framework/issues/6809
    transpile: <(RegExp | string)[]>[/@fortawesome/, 'gsap'],
  },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    langDir: 'locales',
    defaultLocale: 'zh-tw',
    locales: [
      {
        code: 'zh-tw',
        name: '中文',
        file: 'zh-tw.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    lazy: true,
    strategy: 'prefix_except_default',
  }
})
