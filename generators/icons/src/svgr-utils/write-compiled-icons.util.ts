/* eslint-disable n/no-sync */

import type { Source } from '../icons.interfaces.js'

import fs              from 'node:fs'

import path            from 'path'

import { pretty }      from '@atls-ui-generators/utils'

const writeSourceFile = async (source: Source, targetDir: string): Promise<void> => {
  const filename = path.join(targetDir, `${source.name}.tsx`)
  const data = await pretty(source.code)

  fs.writeFileSync(filename, data)
}

const writeIndexFile = (sources: Array<Source>, targetDir: string): void => {
  const filename = path.join(targetDir, 'index.ts')
  const data = `${sources
    .sort((sourceA, sourceB) => sourceA.name.localeCompare(sourceB.name))
    .map((source) => `export * from './${source.name}.js'`)
    .join('\n')}\n`

  fs.writeFileSync(filename, data)
}

export const writeCompiledIcons = async (
  sources: Array<Source>,
  targetDir: string
): Promise<void> => {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  await Promise.all(sources.map(async (source) => writeSourceFile(source, targetDir)))

  writeIndexFile(sources, targetDir)
}
