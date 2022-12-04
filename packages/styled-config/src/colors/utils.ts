import type {
  BrandColorKey,
  BrandColorScheme,
  ColorScheme,
  ColorToken,
} from './types'

export function primaryColors(
  colors: ColorScheme,
  appColors: BrandColorScheme
): Readonly<BrandColorScheme> {
  const result = {} as BrandColorScheme
  for (const [k, v] of Object.entries(appColors)) {
    result[k as BrandColorKey] = colors[v as ColorToken] ?? v
  }

  return Object.freeze(result)
}
