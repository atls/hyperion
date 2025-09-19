/* eslint-disable n/no-sync */

import type { ReplacementIconColors } from '../../icons.interfaces.js'

import { writeFileSync }              from 'node:fs'

const imports = `import { createReplacements } from '@atls-ui-generators/icons/replacement'\n`

export const writeReplacementsFile = (
  targetFile: string,
  replacementIconColors: ReplacementIconColors
): void => {
  const replacementStrings = Object.entries(replacementIconColors)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map((color) => `'${color}'`).join(', ')}]`
      }
      return `${key}: '${value}'`
    })

  const content = `${imports}
export const replacements = createReplacements({
  ${replacementStrings.join(',\n')}
})`

  writeFileSync(targetFile, content)
}
