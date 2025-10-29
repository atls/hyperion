import type { NodePlopAPI } from 'plop'

import { join }             from 'node:path'

const generator = (plop: NodePlopAPI): void => {
  plop.setGenerator('component', {
    description: 'Create a file structure for a new ui component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select component type:',
        choices: [
          { name: 'Popover', value: 'popover' },
          { name: 'Tooltip', value: 'tooltip' },
        ],
      },
    ],
    actions: (data) => [
      {
        type: 'addMany',
        base: `./templates`,
        destination: join(process.cwd(), 'src'),
        templateFiles: `./templates/${data?.type}/**/*`,
        force: true,
      },
    ],
  })
}

export default generator
