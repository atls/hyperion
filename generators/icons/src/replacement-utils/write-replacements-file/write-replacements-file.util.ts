/* eslint-disable n/no-sync */

import type { Replacements } from '../../icons.interfaces.js'

import { writeFileSync }     from 'node:fs'

export const writeReplacementsFile = (targetFile: string, replacements: Replacements): void => {
  const sorted = Object.keys(replacements)
    .sort((keyA, keyB) => keyA.localeCompare(keyB))
    .reduce<Replacements>((acc, key) => Object.assign(acc, { [key]: replacements[key] }), {})

  const content = `export const replacements = ${JSON.stringify(sorted, null, 2)}\n`

  writeFileSync(targetFile, content)
}
