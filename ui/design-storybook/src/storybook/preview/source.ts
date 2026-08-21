import type { LoadedDesignConfig }      from '../project/interfaces.js'

import { join }                         from 'node:path'

import { toModuleSpecifier }            from '../../lib/typescript-source/mappers/module-specifier.js'
import { toSourceLiteral }              from '../../lib/typescript-source/mappers/source-literal.js'
import { generatedConfigImportName }    from '../project/constants.js'
import { previewFileName }              from '../project/constants.js'
import { designStorybookPreviewModule } from './constants.js'

export const previewSource = ({ config, path }: LoadedDesignConfig, configDir: string): string => {
  const previewPath = join(configDir, previewFileName)
  const configImportPath = toModuleSpecifier(path, previewPath)
  const styleImports = (config.styleEntrypoints ?? [])
    .map((entrypoint) => {
      const importPath = toModuleSpecifier(entrypoint, previewPath)

      return `import ${toSourceLiteral(importPath)}`
    })
    .join('\n')

  return `${styleImports ? `${styleImports}\n` : ''}import ${generatedConfigImportName} from ${toSourceLiteral(configImportPath)}
import { createDesignStorybookPreview } from '${designStorybookPreviewModule}'

export default createDesignStorybookPreview(${generatedConfigImportName})
`
}
