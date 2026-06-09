/* eslint-disable n/no-sync */

import type { NodePlopAPI } from 'plop'

import { existsSync }       from 'node:fs'
import { readdirSync }      from 'node:fs'
import { copyFile }         from 'node:fs/promises'
import { mkdir }            from 'node:fs/promises'
import { readFile }         from 'node:fs/promises'
import { readdir }          from 'node:fs/promises'
import { writeFile }        from 'node:fs/promises'
import { dirname }          from 'node:path'
import { join }             from 'node:path'
import { resolve }          from 'node:path'

const RAW_TEMPLATE_EXTENSION = '.raw'

const IMPORT_REPLACEMENTS: Array<readonly [string, string]> = [
  ['@atls-ui-admin/theme/theme-css', '@ui/theme/theme-css'],
  ['@atls-ui-admin/theme', '@ui/theme'],
]

const findRepositoryRoot = (startPath: string): string | undefined => {
  const currentPath = resolve(startPath)

  if (existsSync(join(currentPath, 'ui-admin', 'examples'))) {
    return currentPath
  }

  const parentPath = dirname(currentPath)

  if (parentPath === currentPath) {
    return undefined
  }

  return findRepositoryRoot(parentPath)
}

const readDirectoryNames = (path: string): Array<string> => {
  if (!existsSync(path)) {
    return []
  }

  const entries = readdirSync(path, { withFileTypes: true })

  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)
}

const resolveRepositoryExamplePath = (plopfilePath: string, type: string): string | undefined => {
  const repositoryRoot = findRepositoryRoot(plopfilePath)
  const exampleSourcePath = repositoryRoot
    ? join(repositoryRoot, 'ui-admin', 'examples', type, 'src')
    : ''

  if (exampleSourcePath && existsSync(exampleSourcePath)) {
    return exampleSourcePath
  }

  return undefined
}

const getRepositoryExampleTypes = (plopfilePath: string): Array<string> => {
  const repositoryRoot = findRepositoryRoot(plopfilePath)

  if (!repositoryRoot) {
    return []
  }

  const examplesPath = join(repositoryRoot, 'ui-admin', 'examples')
  const exampleTypes = readDirectoryNames(examplesPath)

  return exampleTypes.filter((type) => existsSync(join(examplesPath, type, 'src')))
}

const getTemplateTypes = (plopfilePath: string): Array<string> => {
  const packagedTypes = readDirectoryNames(join(plopfilePath, 'templates'))
  const exampleTypes = getRepositoryExampleTypes(plopfilePath)

  return [...new Set([...packagedTypes, ...exampleTypes])].sort()
}

const getTemplateName = (type: string): string =>
  type
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const getTemplateChoices = (plopfilePath: string): Array<{ name: string; value: string }> => {
  const templateTypes = getTemplateTypes(plopfilePath)

  return templateTypes.map((type) => ({ name: getTemplateName(type), value: type }))
}

const replaceImports = (content: string): string =>
  IMPORT_REPLACEMENTS.reduce(
    (result, [source, replacement]) => result.replaceAll(source, replacement),
    content
  )

const copyExampleTemplates = async (
  sourcePath: string,
  destinationPath: string
): Promise<number> => {
  const entries = await readdir(sourcePath, { withFileTypes: true })
  const copied = 0

  await mkdir(destinationPath, { recursive: true })

  const copiedCounts = await Promise.all(
    entries.map(async (entry) => {
      const entrySourcePath = join(sourcePath, entry.name)
      const entryDestinationPath = join(destinationPath, entry.name)

      if (entry.isDirectory()) {
        return copyExampleTemplates(entrySourcePath, entryDestinationPath)
      }

      const content = await readFile(entrySourcePath, 'utf8')

      await writeFile(entryDestinationPath, replaceImports(content))

      return 1
    })
  )

  return copiedCounts.reduce((total, count) => total + count, copied)
}

const hasTemplateExtension = (sourcePath: string): boolean => {
  const entries = readdirSync(sourcePath, { withFileTypes: true })
  const checks = entries.map((entry) => {
    const entrySourcePath = join(sourcePath, entry.name)

    if (entry.isDirectory()) {
      return hasTemplateExtension(entrySourcePath)
    }

    return entry.name.endsWith('.hbs') || entry.name.endsWith('.raw')
  })

  return checks.some(Boolean)
}

const resolveCopyTemplatePath = (plopfilePath: string, type: string): string | undefined => {
  const exampleSourcePath = resolveRepositoryExamplePath(plopfilePath, type)

  if (exampleSourcePath) {
    return exampleSourcePath
  }

  const packagedTemplatePath = join(plopfilePath, 'templates', type)

  if (existsSync(packagedTemplatePath) && !hasTemplateExtension(packagedTemplatePath)) {
    return packagedTemplatePath
  }

  return undefined
}

const copyRawTemplates = async (sourcePath: string, destinationPath: string): Promise<number> => {
  const entries = await readdir(sourcePath, { withFileTypes: true })
  const copied = 0

  await mkdir(destinationPath, { recursive: true })

  const copiedCounts = await Promise.all(
    entries.map(async (entry) => {
      const entrySourcePath = join(sourcePath, entry.name)
      const entryName = entry.name.endsWith(RAW_TEMPLATE_EXTENSION)
        ? entry.name.slice(0, -RAW_TEMPLATE_EXTENSION.length)
        : entry.name
      const entryDestinationPath = join(destinationPath, entryName)

      if (entry.isDirectory()) {
        return copyRawTemplates(entrySourcePath, entryDestinationPath)
      }

      await copyFile(entrySourcePath, entryDestinationPath)

      return 1
    })
  )

  return copiedCounts.reduce((total, count) => total + count, copied)
}

const generator = (plop: NodePlopAPI): void => {
  plop.setGenerator('component', {
    description: 'Create a file structure for a new ui component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select component type:',
        choices: getTemplateChoices(plop.getPlopfilePath()),
      },
    ],
    actions: (data) => {
      const type = typeof data?.type === 'string' ? data.type : ''
      const copyTemplatePath = resolveCopyTemplatePath(plop.getPlopfilePath(), type)

      if (copyTemplatePath) {
        return [
          async (): Promise<string> => {
            const copied = await copyExampleTemplates(copyTemplatePath, join(process.cwd(), 'src'))

            return `${copied} files copied`
          },
        ]
      }

      if (type === 'checkbox') {
        return [
          async (): Promise<string> => {
            const copied = await copyRawTemplates(
              join(plop.getPlopfilePath(), 'templates', type),
              join(process.cwd(), 'src')
            )

            return `${copied} files copied`
          },
        ]
      }

      return [
        {
          type: 'addMany',
          base: `./templates/${type}`,
          destination: join(process.cwd(), 'src'),
          templateFiles: `./templates/${type}/**/*`,
          force: true,
        },
      ]
    },
  })
}

export default generator
