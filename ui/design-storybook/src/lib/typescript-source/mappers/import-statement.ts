import type { ImportSpecifier } from '../interfaces.js'

import { toModuleSpecifier }    from './module-specifier.js'
import { toSourceLiteral }      from './source-literal.js'

const toImportBinding = (specifier: ImportSpecifier, localName: string): string => {
  if (specifier.exportName === 'default') {
    return localName
  }

  if (specifier.exportName === localName) {
    return `{ ${localName} }`
  }

  return `{ ${specifier.exportName} as ${localName} }`
}

export const toImportStatement = (
  specifier: ImportSpecifier,
  localName: string,
  fromFile: string
): string => {
  const moduleSpecifier = toModuleSpecifier(specifier.module, fromFile)
  const importBinding = toImportBinding(specifier, localName)

  return `import ${importBinding} from ${toSourceLiteral(moduleSpecifier)}`
}
