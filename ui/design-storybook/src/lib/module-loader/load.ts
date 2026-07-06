import type { LoadedModule }         from './interfaces.js'

import { pathToFileURL }             from 'node:url'

import { toAbsoluteFilePath }        from './absolute-file-path.js'
import { missingDefaultExportError } from './errors.js'

export const loadModule = async (path: string): Promise<LoadedModule> => {
  const absoluteFilePath = toAbsoluteFilePath(path)
  const importedConfig = (await import(pathToFileURL(absoluteFilePath).href)) as {
    default?: unknown
  }

  if (!('default' in importedConfig)) {
    throw new Error(missingDefaultExportError)
  }

  return {
    path: absoluteFilePath,
    value: importedConfig.default,
  }
}
