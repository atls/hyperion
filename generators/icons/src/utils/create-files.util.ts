import type { Options }    from 'prettier'

import type { Source }     from '../icons.interfaces.js'

import * as prettierPlugin from '@atls/prettier-plugin'
import atlsPrettierConfig  from '@atls/config-prettier'
import fs                  from 'fs-extra-promise'
import path                from 'path'
import parserBabel         from 'prettier/parser-babel.js'
import parserTypescript    from 'prettier/parser-typescript.js'
import prettier            from 'prettier/standalone.js'

const prettierConfig =
  'default' in atlsPrettierConfig ? atlsPrettierConfig.default : atlsPrettierConfig

const writeSourceFile = async (source: Source, targetDir: string): Promise<void> => {
  const filename = path.join(targetDir, `${source.name}.tsx`)
  const config = prettierConfig as Options

  const data = prettier.format(source.code, {
    ...config,
    filepath: path.join(targetDir, `${source.name}.tsx`),
    plugins: [parserTypescript, parserBabel, prettierPlugin],
  })

  await fs.writeFileAsync(filename, data)
}

const writeIndexFile = async (sources: Array<Source>, targetDir: string): Promise<void> => {
  const filename = path.join(targetDir, 'index.ts')
  const data = `${sources.map((source) => `export * from './${source.name}.js'`).join('\n')}\n`

  await fs.writeFileAsync(filename, data)
}

export const createFiles = async (sources: Array<Source>, targetDir: string): Promise<void> => {
  await fs.ensureDir(targetDir)

  await Promise.all(sources.map(async (source) => writeSourceFile(source, targetDir)))

  await writeIndexFile(sources, targetDir)
}
