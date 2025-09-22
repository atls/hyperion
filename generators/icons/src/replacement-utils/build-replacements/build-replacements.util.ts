import { glob }                        from 'glob'

import { readFiles }                   from '../../svgr-utils/index.js'
import { createReplacementIconColors } from '../create-replacement-icon-colors/index.js'
import { createReplacements }          from '../create-replacements/index.js'
import { writeReplacementsFile }       from '../write-replacements-file/index.js'

export const buildReplacements = async (iconsPath: string, targetFile: string): Promise<void> => {
  const files = await glob(`${iconsPath}/**/*.svg`)
  const icons = readFiles(files)

  const replacementIconColors = await createReplacementIconColors(icons)
  const replacements = createReplacements(replacementIconColors)

  writeReplacementsFile(targetFile, replacements)
}
