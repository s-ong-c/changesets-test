const knownColorGroupNames = ['white', 'blue'] as const
export type KnownColorGroup = typeof knownColorGroupNames[number]
export function isKnownColorGroup(str: string): str is KnownColorGroup {
  return knownColorGroupNames.includes(str as KnownColorGroup)
}

type MakeTokenSet<
  TGroup extends KnownColorGroup,
  TLightness extends number[]
> = `$${TGroup}${TLightness[number]}`
export type ColorToken = '$white' | MakeTokenSet<'blue', [5]>
export type ColorScheme = Record<ColorToken, string>

export type BrandColorScheme = {
  blue5: ColorToken | string
  white: ColorToken | string
  backgroundLow: ColorToken | string
}

export type BrandColorKey = keyof BrandColorScheme

export type ColorTheme = {
  scheme: ColorScheme
  app: BrandColorScheme
}
