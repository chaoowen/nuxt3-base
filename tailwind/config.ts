import type { TailwindValues } from 'tailwindcss/tailwind-config'

function buildSpacing(max: number): TailwindValues {
  return [...Array(max + 1).keys()].reduce((spacing, i) => {
    return { ...spacing, [i]: i * 0.25 + 'rem' }
  }, {})
}

export const inset: TailwindValues = {
  ...buildSpacing(160),
  px: '1px',
  auto: 'auto',
  half: '50%',
  full: '100%',
  0.5: '0.125rem',
  1.5: '0.375rem',
  2.5: '0.625rem',
  3.5: '0.875rem',
  187: '46.75rem',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
}

export const width: TailwindValues = { ...inset, screen: '100vw' }

export const height: TailwindValues = { ...inset, screen: '100vh' }