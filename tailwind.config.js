import { inset, width, height } from './tailwind/config'
import { ratio, helpers } from './tailwind/plugin'

export default {
  important: true,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        lightest: '#f5f5f5',
        lighter: '#e0e0e0',
        light: '#cbcaca',
        DEFAULT: '#9e9e9e',
        dark: '#757575',
        darker: '#424242',
        darkest: '#212121',
      },
      primary: {
        light: '#C2BB93',
        DEFAULT: '#85815D',
        dark: '#505150',
      },
      secondary: {
        light: '#F2EDE4',
        DEFAULT: '#E2DBCA',
        dark: '#CEB99E',
      },
      danger: {
        light: '#ffebee',
        DEFAULT: '#f44336',
        dark: '#701317',
      },
      warning: {
        light: '#fff8e1',
        DEFAULT: '#ffc107',
        dark: '#845623',
      },
      info: {
        light: '#e3f2fd',
        DEFAULT: '#2196f3',
        dark: '#003a64',
      },
      success: {
        light: '#e8f5e9',
        DEFAULT: '#4caf50',
        dark: '#0c5226',
      },
      youtube: '#ff0000',
      google: '#db4437',
      facebook: '#1978f2',
      telegram: '#08c',
      twitter: '#1da1f2',
      whatsapp: '#25d366',
      line: '#00b900',
    },
    extend: {},
  },
  plugins: [ratio, helpers, inset, width, height, require('flowbite/plugin')],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
}
