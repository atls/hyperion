/* eslint-disable n/no-sync */
import type { ImportSchema }           from './interfaces.js'
import type { StyleDeclarationSchema } from './interfaces.js'
import type { StyleFileSchema }        from './interfaces.js'

import assert                          from 'node:assert/strict'
import { readFileSync }                from 'node:fs'
import { writeFileSync }               from 'node:fs'

import { pretty }                      from '@atls-ui-generators/utils'

import { capitalizeFirstLetter }       from '../utils/index.js'
import { getAppearanceStylesName }     from '../utils/index.js'

const defaultThemeImport: ImportSchema = {
  import: '{ createAppearanceStyles, vars }',
  from: '@atls-ui-parts/theme',
}

export class StyleGenerator {
  readonly #schema: StyleFileSchema

  constructor(schema: StyleFileSchema) {
    assert.ok(schema.prefix, 'Prefix is required')
    assert.ok(schema.variants.length, 'Variants are required')
    assert.ok(schema.states.length, 'States are required')

    this.#schema = schema
  }

  async generateFileContent(): Promise<string> {
    return pretty(`
      ${await this.generateImports()}
      ${await this.generateStatefulStyles()}
      ${await this.generateStyles()}
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

  private async generateImports(): Promise<string> {
    return pretty(
      [...(this.#schema.imports ?? []), this.#schema.createStylesImport ?? defaultThemeImport]
        .map((importSchema) => {
          if (importSchema.kind === 'type') {
            return `import type ${importSchema.import} from '${importSchema.from}'`
          }

          return `import ${importSchema.import} from '${importSchema.from}'`
        })
        .join('\n')
    )
  }

  private async generateStatefulStyles(): Promise<string> {
    return pretty(
      this.#schema.variants.map((variant) => this.generateVariantStatefulStyles(variant)).join('\n')
    )
  }

  private async generateStyles(): Promise<string> {
    return pretty(
      [
        ...this.#schema.states.map((state) => this.generateVariantStyles(state)),
        this.generateExport(),
      ].join('\n')
    )
  }

  private generateVariantStatefulStyles(variant: string): string {
    return this.#schema.states
      .map((state) => {
        const override = this.#schema.stateOverrides?.[variant]
        const declaration = override ?? this.getTokenDeclaration(variant, state)

        return `const ${getAppearanceStylesName(variant, state)} = createAppearanceStyles({
          ${this.generateDeclaration(declaration)}
        })`
      })
      .join('\n\n')
  }

  private generateVariantStyles(state: string): string {
    if (state === 'default') {
      const variantStyles = this.#schema.variants
        .map((variant) => `${variant}: ${getAppearanceStylesName(variant, 'Default')},`)
        .join('\n')

      return `export const appearanceVariant = {
        ${variantStyles}
      }`
    }

    const stateName = capitalizeFirstLetter(state)

    const variantStyles = this.#schema.variants
      .map((variant) => `${variant}${stateName}: ${getAppearanceStylesName(variant, stateName)},`)
      .join('\n')

    return `export const appearance${stateName} = {
      ${variantStyles}
    }`
  }

  private generateDeclaration(declaration: StyleDeclarationSchema): string {
    return Object.entries(declaration)
      .filter(([, value]) => typeof value !== 'undefined')
      .map(([property, expression]) => `${property}: ${expression.value},`)
      .join('\n')
  }

  private generateExport(): string {
    const { export: exportSchema } = this.#schema

    if (!exportSchema) return ''

    const variants = [...this.#schema.variants]
      .sort()
      .map((variant) => `'${variant}'`)
      .join(' | ')
    const entries = this.#schema.variants
      .map((variant) => {
        const states = Object.entries(exportSchema.states)
          .map(([property, state]) => {
            if (state === 'default') {
              return `${property}: appearanceVariant.${variant},`
            }

            const stateName = capitalizeFirstLetter(state)

            return `${property}: appearance${stateName}.${variant}${stateName},`
          })
          .join('\n')

        return `${variant}: {
          ${states}
        },`
      })
      .join('\n')

    return `export const ${exportSchema.name}: Record<${variants}, ${exportSchema.typeName}> = {
      ${entries}
    }`
  }

  private getTokenDeclaration(variant: string, state: string): StyleDeclarationSchema {
    const varsName = this.#schema.varsName ?? 'vars'

    return {
      fontColor: {
        kind: 'expression',
        value: `${varsName}.colors['${this.#schema.prefix}.${variant}.${state}.font']`,
      },
      backgroundColor: {
        kind: 'expression',
        value: `${varsName}.colors['${this.#schema.prefix}.${variant}.${state}.background']`,
      },
      borderColor: {
        kind: 'expression',
        value: `${varsName}.colors['${this.#schema.prefix}.${variant}.${state}.border']`,
      },
    }
  }

  private assertPath(path: string): void {
    if (path.split('').pop() === '/') {
      throw new Error("Path should not end with '/' character")
    }
  }
}
