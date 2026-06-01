import type { NodePlopAPI } from 'plop'

import { copyFile }         from 'node:fs/promises'
import { mkdir }            from 'node:fs/promises'
import { readdir }          from 'node:fs/promises'
import { join }             from 'node:path'

const RAW_TEMPLATE_EXTENSION = '.raw'

const copyRawTemplates = async (
  sourcePath: string,
  destinationPath: string
): Promise<number> => {
  const entries = await readdir(sourcePath, { withFileTypes: true })
  const copied = 0

  await mkdir(destinationPath, { recursive: true })

  const copiedCounts = await Promise.all(entries.map(async (entry) => {
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
  }))

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
        choices: [
          { name: 'Bottom Navigation', value: 'bottom-navigation' },
          { name: 'Checkbox', value: 'checkbox' },
          { name: 'Modal', value: 'modal' },
          { name: 'Popover', value: 'popover' },
          { name: 'Sidebar', value: 'sidebar' },
          { name: 'Tooltip', value: 'tooltip' },
        ],
      },
    ],
    actions: (data) => {
      const type = typeof data?.type === 'string' ? data.type : ''

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
