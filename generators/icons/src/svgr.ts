import * as prettierPlugin from '@atls/prettier-plugin'

import prettierConfig      from '@atls/config-prettier'
import svgr                from '@svgr/core'

import camelcase           from 'camelcase'
import fs                  from 'fs-extra-promise'
import glob                from 'glob-promise'
import path                from 'path'
import parserBabel         from 'prettier/parser-babel'
import parserTypescript    from 'prettier/parser-typescript'
import { format }          from 'prettier/standalone'

const svgrTemplate = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  return typeScriptTpl.ast`
 import React from 'react'
 import { vars } from '@ui/theme'
 import { IconProps } from '../icons.interfaces'

    export const ${componentName} = React.memo((props: IconProps) => (
     ${jsx}
))
  `
}

const read = (files) =>
  Promise.all(
    files.map(async (iconPath) => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      }).replace('50+', 'FiftyPlus')}Icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = (icons, replacements) =>
  Promise.all(
    icons.map(async (icon) => ({
      name: icon.name,
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

const save = async (sources, targetDir) =>
  Promise.all(
    sources.map((source) =>
      fs.writeFileAsync(
        path.join(targetDir, `${source.name}.tsx`),
        // @ts-ignore
        format(`/* eslint-disable */\n${source.code}`, {
          ...prettierConfig,
          filepath: path.join(targetDir, `${source.name}.tsx`),
          plugins: [parserTypescript, parserBabel, prettierPlugin],
        })
      ))
  )

const createIndex = (sources, targetDir) =>
  fs.writeFileAsync(
    path.join(targetDir, 'index.ts'),
    `${sources.map((source) => `export * from './${source.name}'`).join('\n')}\n`
  )

export const build = async (iconsPath: string, targetDir: string, replacements: object) => {
  const prettifyIconsPath = () => {
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
