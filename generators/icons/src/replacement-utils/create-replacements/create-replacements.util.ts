import type { Replacements }          from '../../icons.interfaces.js'
import type { ReplacementIconColors } from '../../icons.interfaces.js'

import { getColorReplacement }        from '../get-color-replacement/index.js'

export const createReplacements = (replacementIconColors: ReplacementIconColors): Replacements =>
  Object.entries(replacementIconColors).reduce<Replacements>((replacement, [icon, value]) => {
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
