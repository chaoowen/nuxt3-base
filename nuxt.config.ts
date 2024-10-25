// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    title: 'Hi Im chaoowen',
    description:
      'Welcome! This is chaowen self-introduction website! 很高興認識你',
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
})
