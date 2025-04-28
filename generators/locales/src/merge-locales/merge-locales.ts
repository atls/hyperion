/* eslint-disable n/no-sync */

import type { MergeLocalesType } from './merge-locales.interfaces.js'

import { existsSync }            from 'node:fs'
import { readFileSync }          from 'node:fs'
import { mkdirSync }             from 'node:fs'
import { writeFileSync }         from 'node:fs'
import { dirname }               from 'node:path'

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
