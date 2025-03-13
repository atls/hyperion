import type { CreateReplacements } from './create-replacements.interfaces.js'

import { getColorReplacement }     from '../get-color-replacement/index.js'

export const createReplacements: CreateReplacements = (replacementIcons) =>
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
