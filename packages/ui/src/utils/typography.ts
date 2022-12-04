export type Typographys =
  | 'heading40'
  | 'heading36'
  | 'heading28'
  | 'heading24'
  | 'heading20'
  | 'subtitle20'
  | 'subtitle18'
  | 'subtitle16'
  | 'subtitle14'
  | 'body18'
  | 'body16'
  | 'body14'
  | 'body12'
  | 'button16'
  | 'button14'
  | 'button12'
  | 'button10'
  | 'badge10'
  | 'badge8'

export const typographys: Record<
  Typographys,
  { fontSize: string; lineHeight: number }
> = {
  heading40: {
    fontSize: '2.5rem',
    lineHeight: 1.5,
  },
  heading36: {
    fontSize: '2.25rem',
    lineHeight: 1.5,
  },
  heading28: {
    fontSize: '1.75rem',
    lineHeight: 1.5,
  },
  heading24: {
    fontSize: '1.5rem',
    lineHeight: 1.5,
  },
  heading20: {
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },
  subtitle20: {
    fontSize: '1.25rem',
    lineHeight: 1.4,
  },
  subtitle18: {
    fontSize: '1.125rem',
    lineHeight: 1.5,
  },
  subtitle16: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  subtitle14: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  body18: {
    fontSize: '1.125rem',
    lineHeight: 1.5,
  },
  body16: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body14: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  body12: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
  },
  button16: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  button14: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  button12: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
  },
  button10: {
    fontSize: '0.625rem',
    lineHeight: 1.5,
  },
  badge10: {
    fontSize: '0.625rem',
    lineHeight: 1.5,
  },
  badge8: {
    fontSize: '0.5rem',
    lineHeight: 1.5,
  },
}

export type FontWeights =
  | 'light'
  | 'regular'
  | 'bold'
  | 'black'
  | 'semiBold'
  | 'medium'
export const fontWeights: Record<FontWeights, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  black: 900,
}

export function getFontWeightCss(weight: FontWeights) {
  return {
    fontWeight: fontWeights[weight],
  }
}

export function getTypographyCss(typo: Typographys) {
  return typographys[typo]
}
