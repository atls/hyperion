import type { StorybookProjectSources } from './interfaces.js'
import type { LoadedDesignConfig }      from './interfaces.js'
import type { StorybookProjectOptions } from './interfaces.js'

import { mkdir }                        from 'node:fs/promises'
import { rm }                           from 'node:fs/promises'
import { writeFile }                    from 'node:fs/promises'
import { join }                         from 'node:path'
import { resolve }                      from 'node:path'

import { mainSource }                   from '../main/source.js'
import { generatedMatrixStoryName }     from '../matrix-story/constants.js'
import { matrixStorySource }            from '../matrix-story/source.js'
import { previewSource }                from '../preview/source.js'
import { mainFileName }                 from './constants.js'
import { previewFileName }              from './constants.js'

export const writeStorybookFiles = async (
  loadedConfig: LoadedDesignConfig,
  options: StorybookProjectOptions
): Promise<string> => {
  const configDir = resolve(process.cwd(), options.configDir)
  const sources: StorybookProjectSources = {
    main: mainSource(loadedConfig, configDir),
    matrixStory: matrixStorySource(loadedConfig, configDir),
    preview: previewSource(loadedConfig, configDir),
  }

  await mkdir(configDir, { recursive: true })
  await writeFile(join(configDir, mainFileName), sources.main)
  await writeFile(join(configDir, previewFileName), sources.preview)

  if (sources.matrixStory) {
    await writeFile(join(configDir, generatedMatrixStoryName), sources.matrixStory)
  } else {
    await rm(join(configDir, generatedMatrixStoryName), { force: true })
  }

  return configDir
}
