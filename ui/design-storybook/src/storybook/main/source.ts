import type { LoadedDesignConfig }   from '../project/interfaces.js'

import { join }                      from 'node:path'

import { toModuleSpecifier }         from '../../lib/typescript-source/mappers/module-specifier.js'
import { toSourceLiteral }           from '../../lib/typescript-source/mappers/source-literal.js'
import { generatedMatrixStoryName }  from '../matrix-story/constants.js'
import { generatedConfigImportName } from '../project/constants.js'
import { mainFileName }              from '../project/constants.js'
import { designStorybookMainModule } from './constants.js'

export const mainSource = ({ config, path }: LoadedDesignConfig, configDir: string): string => {
  const mainPath = join(configDir, mainFileName)
  const configImportPath = toModuleSpecifier(path, mainPath)
  const baseStories = Array.isArray(config.stories) ? config.stories : [config.stories]
  const stories = config.matrix?.components.length
    ? [...baseStories, `./${generatedMatrixStoryName}`]
    : baseStories

  return `import ${generatedConfigImportName} from ${toSourceLiteral(configImportPath)}
import { createDesignStorybookMain } from '${designStorybookMainModule}'

export default createDesignStorybookMain({
  ...${generatedConfigImportName},
  stories: ${JSON.stringify(stories, null, 2)},
})
`
}
