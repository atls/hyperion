// @ts-expect-error no declaration
import svgr             from '@svgr/core'
import camelcase        from 'camelcase'
import fs               from 'fs-extra-promise'
import glob             from 'glob-promise'
import path             from 'path'
import prettier         from 'prettier'

import { replacements } from './replacements.js'

const TARGET_DIR = path.join(__dirname, 'src')

const replaceElement = (code: string): string =>
  code.replace('<svg', '<Icon').replace('</svg', '</Icon')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const svgrTemplate = ({ template }: any, opts: any, { componentName, jsx }: any): any => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  // eslint-disable-next-line
  return typeScriptTpl.ast`
import React from 'react'

import { Icon, IconProps } from '@atls-ui-admin/icon'
export const ${componentName.name} : React.FC<IconProps> = (props) => ${jsx}
${componentName.name}.displayName = '${componentName.name}'
`
}

const read = async (
  files: Array<string>
): Promise<Array<{ name: string; filename: string; source: string }>> =>
  Promise.all(
    files.map(async (iconPath) => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      })}Icon`,
      filename: `${path.basename(iconPath, path.extname(iconPath))}.icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = async (
  icons: Array<{ filename: string; name: string; source: string }>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Array<{ filename: string; name: string; code: any }>> =>
  Promise.all(
    icons.map(async (icon) => ({
      filename: icon.filename,
      name: icon.name,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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

const save = async (sources: Array<{ filename: string; code: string }>): Promise<Array<void>> =>
  Promise.all(
    sources.map((source) =>
      fs.writeFileAsync(
        path.join(TARGET_DIR, `${source.filename}.tsx`),
        prettier
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

const createIndex = (sources: Array<{ filename: string }>): ReturnType<typeof fs.writeFileAsync> =>
  fs.writeFileAsync(
    path.join(TARGET_DIR, 'index.ts'),
    sources.map((source) => `export * from './${source.filename}'`).join('\n')
  )

const build = async (): Promise<void> => {
  const files = await glob('./icons/*.svg')
  const icons = await read(files)

  const sources = await compile(icons.filter((icon) => icon.source))

  await fs.ensureDir(TARGET_DIR)

  await save(sources)
  await createIndex(sources)
}

build()
