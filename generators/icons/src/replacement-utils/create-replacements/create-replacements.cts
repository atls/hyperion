const { getColorReplacement } = require('../get-color-replacement/index.cjs')

export const createReplacements = (
  replacementIconColors: Record<string, Array<string> | string>
): Record<string, Record<string, string>> => {
  const replacements: Record<string, Record<string, string>> = {}

  for (const [icon, value] of Object.entries(replacementIconColors)) {
    if (Array.isArray(value)) {
      const colors: Record<string, string> = {}

      for (const color of value) {
        Object.assign(colors, getColorReplacement({ color }))
      }

      replacements[icon] = colors
    } else {
      replacements[icon] = getColorReplacement({ color: value })
    }
  }

  return replacements
}
