const { getColorReplacement } = require('../get-color-replacement/index.cjs')

export const createReplacements = (replacementIcons: Record<string, Array<string> | string>): Record<string, Record<string, string>> =>
  Object.entries(replacementIcons).reduce<Record<string, Record<string, string>>>((
    replacement,
    [icon, value]
  ) => {
    if (Array.isArray(value)) {
      return {
        ...replacement,
        [icon]: value.reduce<Record<string, string>>(
          (colors, color) => ({ ...colors, ...getColorReplacement({ color }) }),
          {}
        ),
      }
    }

    return { ...replacement, [icon]: getColorReplacement({ color: value }) }
  }, {})
