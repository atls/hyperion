import type { NodePlopAPI } from 'plop'

const generator = (plop: NodePlopAPI): void => {
  plop.setGenerator('component', {
    description: 'Create a tooltip component',
    prompts: [],
    actions: [
      {
        type: 'addMany',
        destination: './src',
        templateFiles: './templates/**/*',
        force: true,
      },
    ],
  })
}

export default generator
