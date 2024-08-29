import * as prettierPlugin from '@atls/prettier-plugin'
import prettierConfig      from '@atls/config-prettier'
// @ts-expect-error missing declaration
import svgr                from '@svgr/core'
import { format }          from 'prettier/standalone'
import camelcase           from 'camelcase'
import fs                  from 'fs-extra-promise'
import glob                from 'glob-promise'
import path                from 'path'
import parserBabel         from 'prettier/parser-babel'
import parserTypescript    from 'prettier/parser-typescript'

// @ts-expect-error types
const svgrTemplate = ({ template }, opts, { componentName, jsx }): any => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  // eslint-disable-next-line
  return typeScriptTpl.ast`
 import React from 'react'
 import { vars } from '@ui/theme'
 import type { IconProps } from '../icons.interfaces'

    export const ${componentName} = React.memo((props: IconProps) => (
     ${jsx}
))
  `
}

const read = async (files: Array<string>): Promise<Array<{ name: string; source: string }>> =>
  Promise.all(
    files.map(async (iconPath) => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      }).replace('50+', 'FiftyPlus')}Icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = async (
  icons: Array<{ name: string; source: string }>,
  replacements: Record<string, any>
): Promise<Array<{ name: string; code: any }>> =>
  Promise.all(
    icons.map(async (icon) => ({
      name: icon.name,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      code: await svgr(
        icon.source.replace(/mask0/g, icon.name),
        {
          icon: true,
          template: svgrTemplate,
          replaceAttrValues: replacements[icon.name] || {},
        },
        { componentName: icon.name.replace('50+', 'FiftyPlus') }
      ),
    }))
  )

const save = async (
  sources: Array<{ name: string; code?: string }>,
  targetDir: string
): Promise<Array<void>> =>
  Promise.all(
    sources.map((source) =>
      fs.writeFileAsync(
        path.join(targetDir, `${source.name}.tsx`),
        // @ts-expect-error
        format(`/* eslint-disable */\n${source?.code || ''}`, {
          ...prettierConfig,
          filepath: path.join(targetDir, `${source.name}.tsx`),
          plugins: [parserTypescript, parserBabel, prettierPlugin],
        })
      ))
  )

const createIndex = (
  sources: Array<{ name: string }>,
  targetDir: string
): ReturnType<typeof fs.writeFileAsync> =>
  fs.writeFileAsync(
    path.join(targetDir, 'index.ts'),
    `${sources.map((source) => `export * from './${source.name}'`).join('\n')}\n`
  )

export const build = async (
  iconsPath: string,
  targetDir: string,
  replacements: object
): Promise<void> => {
  const prettifyIconsPath = (): string => {
    const parts = iconsPath.split('')
    if (parts[parts.length - 1] === '/') {
      parts.pop()
      return parts.join('')
    }

    return iconsPath
  }

  const files = await glob(`${prettifyIconsPath()}/*.svg`)
  const icons = await read(files)

  const sources = await compile(
    icons.filter((icon: any) => icon.source),
    replacements
  )

  await fs.ensureDir(targetDir)

  await save(sources, targetDir)
  await createIndex(sources, targetDir)
}
