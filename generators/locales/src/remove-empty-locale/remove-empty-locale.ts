/* eslint-disable n/no-sync */

import type { RemoveEmptyLocaleType } from './remove-empty-locale.interfaces.js'

import { existsSync }                 from 'node:fs'
import { readFileSync }               from 'node:fs'
import { readdirSync }                from 'node:fs'
import { rmSync }                     from 'node:fs'
import { unlinkSync }                 from 'node:fs'
import { join }                       from 'node:path'

export const removeEmptyLocale: RemoveEmptyLocaleType = (
  outputFilePath,
  localePath,
  folderName,
  allLocales
) => {
  if (existsSync(outputFilePath)) {
    const content = readFileSync(outputFilePath, 'utf8').trim()
    if (content === '{}' || content === '{\n}') {
      unlinkSync(outputFilePath)

      if (readdirSync(join(localePath, folderName)).length === 0) {
        rmSync(join(localePath, folderName), { recursive: true, force: true })
      }
    } else {
      allLocales.push(outputFilePath)
    }
  }
}
