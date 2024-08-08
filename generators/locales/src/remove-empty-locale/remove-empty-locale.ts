import { existsSync }            from 'fs'
import { readFileSync }          from 'fs'
import { readdirSync }           from 'fs'
import { rmSync }                from 'fs'
import { unlinkSync }            from 'fs'
import { join }                  from 'path'

import { RemoveEmptyLocaleType } from './remove-empty-locale.interfaces.js'

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
