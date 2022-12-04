import { colors, primaryColors } from '../index'

describe('primary colors', () => {
  it('light', () => {
    expect(
      primaryColors(colors.light.scheme, colors.light.app)
    ).toMatchSnapshot()
  })
})
