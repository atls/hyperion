/* eslint-disable n/no-sync */
import type { ImportSchema }  from './interfaces.js'
import type { MapFileSchema } from './interfaces.js'

import assert                 from 'node:assert/strict'
import { readFileSync }       from 'node:fs'
import { writeFileSync }      from 'node:fs'

import { pretty }             from '@atls-ui-generators/utils'

export class MapGenerator {
  readonly #schema: MapFileSchema

  constructor(schema: MapFileSchema) {
    assert.ok(schema.imports?.length, 'Imports are required')
    assert.ok(schema.styles?.length || schema.exports?.length, 'Styles or exports are required')

    this.#schema = schema
  }

  async generateFileContent(): Promise<string> {
    return pretty(`
      ${this.generateImports()}
      ${this.generateStyles()}
      ${this.generateExports()}
    `)
  }

  async generateFile(path: string, filename = 'appearance.css.ts'): Promise<void> {
    this.assertPath(path)

    const code = await this.generateFileContent()

    writeFileSync(`${path}/${filename}`, code)
  }

  async checkFile(path: string, filename = 'appearance.css.ts'): Promise<void> {
    this.assertPath(path)

    const expected = await this.generateFileContent()
    const actual = await pretty(readFileSync(`${path}/${filename}`, 'utf-8'))

    assert.equal(actual, expected, `${path}/${filename} is out of date`)
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

  private assertPath(path: string): void {
    if (path.split('').pop() === '/') {
      throw new Error("Path should not end with '/' character")
    }
  }
}
