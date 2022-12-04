import type { ColorTheme } from './types'

export const light: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    $white: '#ffffff',
    /**  blue */
    $blue5: '#F1F8FF',
  },
  app: {
    blue5: '$blue5',
    white: '$white',
    backgroundLow: '#F5F6F8',
  },
})
