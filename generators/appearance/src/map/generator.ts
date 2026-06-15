import type { ImportSchema }       from './interfaces.js'
import type { MapFileSchema }      from './interfaces.js'

import { pretty }                  from '@atls-ui-generators/utils'

import { MapContentRequiredError } from './content-required.error.js'
import { MapImportsRequiredError } from './imports-required.error.js'

export class MapGenerator {
  readonly #schema: MapFileSchema

  constructor(schema: MapFileSchema) {
    if (!schema.imports?.length) {
      throw new MapImportsRequiredError()
    }

    if (!schema.styles?.length && !schema.exports?.length) {
      throw new MapContentRequiredError()
    }

    this.#schema = schema
  }

  async generateFileContent(): Promise<string> {
    return pretty(`
      ${this.generateImports()}
      ${this.generateStyles()}
      ${this.generateExports()}
    `)
  }

  private generateImports(): string {
    return (this.#schema.imports ?? [])
      .map((importSchema: ImportSchema) => {
        if (importSchema.kind === 'type') {
          return `import type ${importSchema.import} from '${importSchema.from}'`
        }

        return `import ${importSchema.import} from '${importSchema.from}'`
      })
      .join('\n')
  }

  private generateStyles(): string {
    return (this.#schema.styles ?? [])
      .map((styleSchema) => {
        const properties = Object.entries(styleSchema.properties)
          .map(([property, expression]) => `${property}: ${expression.value},`)
          .join('\n')

        return `${styleSchema.exported ? 'export ' : ''}const ${styleSchema.name} = style({
          ${properties}
        })`
      })
      .join('\n\n')
  }

  private generateExports(): string {
    return (this.#schema.exports ?? [])
      .map((exportSchema) => {
        const entries = Object.entries(exportSchema.entries)
          .map(([name, expression]) => `${name}: ${expression.value},`)
          .join('\n')

        if (exportSchema.typeName && (exportSchema.variants?.length || exportSchema.variantsType)) {
          const variants =
            exportSchema.variantsType ??
            exportSchema.variants
              ?.map((variant) => `'${variant}'`)
              .sort()
              .join(' | ')

          return `export const ${exportSchema.name}: Record<${variants}, ${exportSchema.typeName}> = {
            ${entries}
          }`
        }

        return `export const ${exportSchema.name} = {
          ${entries}
        }`
      })
      .join('\n\n')
  }
}
