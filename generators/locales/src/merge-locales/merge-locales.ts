import { existsSync }       from 'fs'
import { readFileSync }     from 'fs'
import { mkdirSync }        from 'fs'
import { writeFileSync }    from 'fs'
import { dirname }          from 'path'

import { MergeLocalesType } from './merge-locales.interfaces'

export const mergeLocales: MergeLocalesType = (files, outputPath) => {
  if (!files.length) return

  const mergedLocales = {}
  files.forEach((file) => {
    if (existsSync(file)) {
      const content = JSON.parse(readFileSync(file, 'utf8'))
      Object.assign(mergedLocales, content)
    }
  })
  const directory = dirname(outputPath)

  if (!existsSync(directory)) {
    mkdirSync(directory, { recursive: true })
  }

  writeFileSync(outputPath, JSON.stringify(mergedLocales, null, 2), 'utf8')
}
