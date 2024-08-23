import svgr             from '@svgr/core'

import camelcase        from 'camelcase'
import fs               from 'fs-extra-promise'
import glob             from 'glob-promise'
import path             from 'path'
import prettier         from 'prettier'

import { replacements } from './replacements.js'

const TARGET_DIR = path.join(__dirname, 'src')

const replaceElement = (code: string) => code.replace('<svg', '<Icon').replace('</svg', '</Icon')

const svgrTemplate = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  return typeScriptTpl.ast`
import React from 'react'

import { Icon, IconProps } from '@atls-ui-admin/icon'
export const ${componentName.name} = (props: IconProps) => ${jsx}
${componentName.name}.displayName = '${componentName.name}'
`
}

const read = (files) =>
  Promise.all(
    files.map(async (iconPath) => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      })}Icon`,
      filename: `${path.basename(iconPath, path.extname(iconPath))}.icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = (icons) =>
  Promise.all(
    icons.map(async (icon) => ({
      filename: icon.filename,
      name: icon.name,
      code: await svgr(
        icon.source.replace(/mask0/g, icon.name),
        {
          icon: true,
          template: svgrTemplate,
          replaceAttrValues: replacements[icon.name] || {},
        },
        { componentName: icon.name }
      ),
    }))
  )

const save = async (sources) =>
  Promise.all(
    sources.map((source) =>
      fs.writeFileAsync(
        path.join(TARGET_DIR, `${source.filename}.tsx`),
        // @ts-ignore
        prettier
          // @ts-ignore
          .format(replaceElement(source.code), {
            parser: 'babel',
            semi: false,
            singleQuote: true,
            tabWidth: 2,
            jsxSingleQuote: true,
            trailingComma: 'all',
            pluginSearchDirs: [process.cwd()],
            printWidth: 100,
          })
          .replaceAll("{'", '')
          .replaceAll("'}", '')
      ))
  )

const createIndex = (sources) =>
  fs.writeFileAsync(
    path.join(TARGET_DIR, 'index.ts'),
    sources.map((source) => `export * from './${source.filename}'`).join('\n')
  )

const build = async () => {
  const files = await glob('./icons/*.svg')
  const icons = await read(files)

  const sources = await compile(icons.filter((icon: any) => icon.source))

  await fs.ensureDir(TARGET_DIR)

  await save(sources)
  await createIndex(sources)
}

build()
