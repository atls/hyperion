import type { Replacements }          from '../../icons.interfaces.js'
import type { ReplacementIconColors } from '../../icons.interfaces.js'

import { getColorReplacement }        from '../get-color-replacement/index.js'

export const createReplacements = (replacementIconColors: ReplacementIconColors): Replacements => {
  const replacements: Replacements = {}

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
