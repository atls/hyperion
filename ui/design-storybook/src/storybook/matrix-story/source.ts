import type { MatrixItemConfig }       from '../../config/index.js'
import type { LoadedDesignConfig }     from '../project/interfaces.js'
import type { MatrixStoryImportNames } from './interfaces.js'

import { join }                        from 'node:path'

import { toImportStatement }           from '../../lib/typescript-source/mappers/import-statement.js'
import { toSourceLiteral }             from '../../lib/typescript-source/mappers/source-literal.js'
import { defaultMatrixTitle }          from '../../ui/matrix/constants.js'
import { componentLocalNamePrefix }    from './constants.js'
import { componentsCollectionName }    from './constants.js'
import { componentsMatrixModule }      from './constants.js'
import { componentsMatrixName }        from './constants.js'
import { generatedMatrixStoryName }    from './constants.js'
import { matrixStoryName }             from './constants.js'
import { metaTypeName }                from './constants.js'
import { storybookReactModule }        from './constants.js'
import { storyObjTypeName }            from './constants.js'
import { storyTypeName }               from './constants.js'
import { variantsLocalNamePrefix }     from './constants.js'

const toImportNames = (index: number): MatrixStoryImportNames => ({
  component: `${componentLocalNamePrefix}${index}`,
  variants: `${variantsLocalNamePrefix}${index}`,
})

const createComponentImports = (
  { component, variants }: MatrixItemConfig,
  index: number,
  storyPath: string
): string => {
  const importNames = toImportNames(index)

  return [
    toImportStatement(component, importNames.component, storyPath),
    toImportStatement(variants, importNames.variants, storyPath),
  ].join('\n')
}

const createComponentItem = ({ name }: MatrixItemConfig, index: number): string => {
  const importNames = toImportNames(index)

  return `    {
      name: ${toSourceLiteral(name)},
      component: ${importNames.component},
      variants: ${importNames.variants},
    }`
}

export const matrixStorySource = (
  { config }: LoadedDesignConfig,
  configDir: string
): string | undefined => {
  if (!config.matrix?.components.length) {
    return undefined
  }

  const storyPath = join(configDir, generatedMatrixStoryName)
  const { components, title = defaultMatrixTitle } = config.matrix
  const imports = components
    .map((componentConfig, index) => createComponentImports(componentConfig, index, storyPath))
    .join('\n')
  const componentItems = components
    .map((componentConfig, index) => createComponentItem(componentConfig, index))
    .join(',\n')

  return `import type { ${metaTypeName} } from '${storybookReactModule}'
import type { ${storyObjTypeName} } from '${storybookReactModule}'

import { ${componentsMatrixName} } from '${componentsMatrixModule}'

${imports}

const meta: ${metaTypeName} = {
  title: ${toSourceLiteral(title)},
}

export default meta

type ${storyTypeName} = ${storyObjTypeName}

const ${componentsCollectionName} = [
${componentItems},
]

export const ${matrixStoryName}: ${storyTypeName} = {
  render: () => (
    <${componentsMatrixName} components={${componentsCollectionName}} />
  ),
}
`
}
