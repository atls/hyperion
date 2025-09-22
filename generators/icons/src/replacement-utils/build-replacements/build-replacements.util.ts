import type { Icon }                   from '../../icons.interfaces.js'
import type { Replacements }           from '../../icons.interfaces.js'

import { createReplacementIconColors } from '../create-replacement-icon-colors/index.js'
import { createReplacements }          from '../create-replacements/index.js'

export const buildReplacements = async (icons: Array<Icon>): Promise<Replacements> => {
  const replacementIconColors = await createReplacementIconColors(icons)

  return createReplacements(replacementIconColors)
}
