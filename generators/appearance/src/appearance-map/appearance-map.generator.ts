/* eslint-disable n/no-sync */
import assert            from 'node:assert/strict'
import { readFileSync }  from 'node:fs'
import { writeFileSync } from 'node:fs'

import { pretty }        from '@atls-ui-generators/utils'

export interface AppearanceMapImport {
  import: string
  from: string
  kind?: 'type' | 'value'
}

export interface AppearanceMapStyle {
  exported?: boolean
  name: string
  properties: Record<string, string>
}

export interface AppearanceMapExport {
  name: string
  entries: Record<string, string>
  typeName?: string
  variants?: Array<string>
  variantsType?: string
}

export interface AppearanceMapGeneratorOptions {
  exports?: Array<AppearanceMapExport>
  imports?: Array<AppearanceMapImport>
  styles?: Array<AppearanceMapStyle>
}

export class AppearanceMapGenerator {
  constructor(private readonly options: AppearanceMapGeneratorOptions) {
    assert.ok(options.imports?.length, 'Imports are required')
    assert.ok(options.styles?.length || options.exports?.length, 'Styles or exports are required')
  }

  async generateFileContent(): Promise<string> {
    return pretty(`
      ${this.generateImports()}
      ${this.generateStyles()}
      ${this.generateExports()}
    `)
  }

  async generateFile(path: string, filename = 'appearance.css.ts'): Promise<void> {
    if (path.split('').pop() === '/') {
      throw new Error("Path should not end with '/' character")
    }

    const code = await this.generateFileContent()

    writeFileSync(`${path}/${filename}`, code)
  }

  async checkFile(path: string, filename = 'appearance.css.ts'): Promise<void> {
    if (path.split('').pop() === '/') {
      throw new Error("Path should not end with '/' character")
    }

    const expected = await this.generateFileContent()
    const actual = await pretty(readFileSync(`${path}/${filename}`, 'utf-8'))

    assert.equal(actual, expected, `${path}/${filename} is out of date`)
  }

  private generateImports(): string {
    return (this.options.imports ?? [])
      .map((requiredImport) => {
        if (requiredImport.kind === 'type') {
          return `import type ${requiredImport.import} from '${requiredImport.from}'`
        }

        return `import ${requiredImport.import} from '${requiredImport.from}'`
      })
      .join('\n')
  }

  private generateStyles(): string {
    return (this.options.styles ?? [])
      .map((styleDeclaration) => {
        const properties = Object.entries(styleDeclaration.properties)
          .map(([property, value]) => `${property}: ${value},`)
          .join('\n')

        return `${styleDeclaration.exported ? 'export ' : ''}const ${styleDeclaration.name} = style({
          ${properties}
        })`
      })
      .join('\n\n')
  }

  private generateExports(): string {
    return (this.options.exports ?? [])
      .map((exportDeclaration) => {
        const entries = Object.entries(exportDeclaration.entries)
          .map(([name, value]) => `${name}: ${value},`)
          .join('\n')

        if (
          exportDeclaration.typeName &&
          (exportDeclaration.variants?.length || exportDeclaration.variantsType)
        ) {
          const variants =
            exportDeclaration.variantsType ??
            exportDeclaration.variants?.map((variant) => `'${variant}'`).join(' | ')

          return `export const ${exportDeclaration.name}: Record<${variants}, ${exportDeclaration.typeName}> = {
            ${entries}
          }`
        }

        return `export const ${exportDeclaration.name} = {
          ${entries}
        }`
      })
      .join('\n\n')
  }
}
