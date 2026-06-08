import { access }    from 'node:fs/promises'
import { cp }        from 'node:fs/promises'
import { mkdir }     from 'node:fs/promises'
import { readFile }  from 'node:fs/promises'
import { readdir }   from 'node:fs/promises'
import { rm }        from 'node:fs/promises'
import { writeFile } from 'node:fs/promises'
import { join }      from 'node:path'

const IMPORT_REPLACEMENTS: Array<readonly [string, string]> = [
  ['@atls-ui-admin/theme/theme-css', '@ui/theme/theme-css'],
  ['@atls-ui-admin/theme', '@ui/theme'],
]

const packageRoot = process.cwd()
const repositoryRoot = join(packageRoot, '..', '..')
const examplesPath = join(repositoryRoot, 'ui-admin', 'examples')
const sourceTemplatesPath = join(packageRoot, 'src', 'templates')
const distTemplatesPath = join(packageRoot, 'dist', 'templates')

const pathExists = async (path: string): Promise<boolean> => {
  try {
    await access(path)

    return true
  } catch {
    return false
  }
}

const replaceImports = (content: string): string =>
  IMPORT_REPLACEMENTS.reduce(
    (result, [source, replacement]) => result.replaceAll(source, replacement),
    content
  )

const copyExampleTemplates = async (sourcePath: string, destinationPath: string): Promise<void> => {
  const entries = await readdir(sourcePath, { withFileTypes: true })

  await mkdir(destinationPath, { recursive: true })

  await Promise.all(
    entries.map(async (entry) => {
      const entrySourcePath = join(sourcePath, entry.name)
      const entryDestinationPath = join(destinationPath, entry.name)

      if (entry.isDirectory()) {
        await copyExampleTemplates(entrySourcePath, entryDestinationPath)

        return
      }

      const content = await readFile(entrySourcePath, 'utf8')

      await writeFile(entryDestinationPath, replaceImports(content))
    })
  )
}

const readExampleTemplateTypes = async (): Promise<Array<string>> => {
  const entries = await readdir(examplesPath, { withFileTypes: true })
  const directories = entries.filter((entry) => entry.isDirectory())
  const existingTypes = await Promise.all(
    directories.map(async (entry) => {
      const sourcePath = join(examplesPath, entry.name, 'src')
      const sourceExists = await pathExists(sourcePath)

      return sourceExists ? entry.name : undefined
    })
  )

  return existingTypes.filter((type): type is string => Boolean(type))
}

await rm(distTemplatesPath, { recursive: true, force: true })
await cp(sourceTemplatesPath, distTemplatesPath, { recursive: true })

const exampleTemplateTypes = await readExampleTemplateTypes()

await Promise.all(
  exampleTemplateTypes.map(async (type) => {
    await copyExampleTemplates(
      join(repositoryRoot, 'ui-admin', 'examples', type, 'src'),
      join(distTemplatesPath, type)
    )
  })
)
