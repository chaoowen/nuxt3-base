import plugin from 'tailwindcss/plugin.js'

export const ratio = plugin(({ addUtilities, e }) => {
  const ratios = [
    [1, 1],
    [5, 4],
    [4, 3],
    [3, 2],
    [5, 3],
    [2, 1],
    [3, 1],
    [16, 9],
    [21, 9],
    [32, 9],
    [4, 5],
    [3, 4],
    [2, 3],
    [3, 5],
    [1, 2],
    [1, 3],
    [9, 16],
    [9, 21],
    [9, 32],
  ]

  addUtilities(
    ratios.map(([x, y]) => ({
      [`.${e(`ratio-${x}by${y}`)}`]: {
        [`@apply pb-[calc(${(y / x) * 100}%)]`]: {},
      },
    }))
  )
})

export const helpers = plugin(({ addUtilities, addComponents }) => {
  addComponents({
    '.responsive': {
      '@apply relative': {},
      '> *': {
        '@apply absolute w-full h-full': {},
      },
      '> img': {
        '@apply object-cover': {},
      },
    },
  })

  addUtilities({
    '.transitable': {
      '@apply transition-all duration-500': {},
    },
    '.hoverable': {
      '@apply transition-all duration-500 cursor-pointer': {},
    },
    '.disabled': {
      '@apply opacity-50 pointer-events-none !important': {},
    },
    '.readonly': {
      '@apply cursor-not-allowed !important': {},
    },
    '.backdrop': {
      '@apply fixed inset-0 z-20 backdrop-blur-[2px]': {},
    },
  })

  addUtilities({
    '.flex-center': {
      '@apply flex items-center justify-center': {},
    },
    '.absolute-center': {
      '@apply absolute translate-x-half translate-y-half right-half bottom-half':
        {},
    },
  })
})
