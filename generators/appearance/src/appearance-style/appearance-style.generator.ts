/* eslint-disable n/no-sync */
import type { ColorSchemes }       from '../appearance.interfaces.js'

import assert                      from 'node:assert/strict'
import { readFileSync }            from 'node:fs'
import { writeFileSync }           from 'node:fs'

import { pretty }                  from '@atls-ui-generators/utils'

import { capitalizeFirstLetter }   from '../utils/index.js'
import { getAppearanceStylesName } from '../utils/index.js'

export interface AppearanceStyleImport {
  import: string
  from: string
  kind?: 'type' | 'value'
}

export interface AppearanceStyleDeclaration {
  backgroundColor?: string
  border?: string
  borderColor?: string
  fontColor?: string
}

export interface AppearanceStyleExport {
  name: string
  typeName: string
  states: Record<string, string>
}

export interface AppearanceStyleGeneratorOptions {
  createAppearanceStylesImport?: AppearanceStyleImport
  extraImports?: Array<AppearanceStyleImport>
  stateOverrides?: Record<string, AppearanceStyleDeclaration>
  states?: Array<string>
  varsImport?: AppearanceStyleImport
  variants?: Array<string>
  appearanceExport?: AppearanceStyleExport
}

export class AppearanceStyleGenerator {
  readonly requiredImports: Array<AppearanceStyleImport>

  #variants: Array<string> = []

  #states: Array<string> = []

  readonly #options: AppearanceStyleGeneratorOptions

  constructor(
    private readonly prefix: string,
    private readonly colorSchemes: ColorSchemes,
    options: AppearanceStyleGeneratorOptions = {}
  ) {
    this.#options = options
    this.requiredImports = [
      ...(options.extraImports ?? []),
      options.varsImport ?? { import: '{ vars }', from: '@ui/theme/theme-css' },
      options.createAppearanceStylesImport ?? {
        import: '{ createAppearanceStyles }',
        from: '@atls-ui-generators/appearance/create',
      },
    ]

    const colorsKeys = Object.keys(this.colorSchemes).filter((key) =>
      key.startsWith(`${this.prefix}.`))
    const overrideVariants = Object.keys(options.stateOverrides ?? {})

    assert.ok(
      colorsKeys.length || overrideVariants.length,
      `Not found color keys for prefix '${this.prefix}'`
    )

    colorsKeys.forEach((key) => {
      assert.match(
        key,
        /^[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+\.(font|background|border)$/,
        `Color key should match the pattern 'prefix.variant.state.type', where 'type' can be 'font', 'background', or 'border'. Received: '${key}'`
      )
    })

    const allVariants = colorsKeys.reduce<Array<string>>(
      (array, key) => [...array, key.split('.')[1]],
      []
    )

    this.#variants = options.variants ?? [...new Set([...allVariants, ...overrideVariants])]

    const allStates = colorsKeys.reduce<Array<string>>(
      (array, key) =>
        key.startsWith(`${this.prefix}.${this.#variants[0]}`)
          ? [...array, key.split('.')[2]]
          : array,
      []
    )

    this.#states = options.states ?? [...new Set(allStates)]
  }

  async generateAppearanceStyles(): Promise<
    Record<'appearanceStyles' | 'imports' | 'statefulStyles', string>
  > {
    const statefulStyles = await pretty(
      this.#variants.map((variant) => this.generateVariantStatefulStyles(variant)).join('\n\n')
    )

    const appearanceStyles = await pretty(
      [
        ...this.#states.map((state) => this.generateVariantAppearanceStyles(state)),
        this.generateAppearanceExport(),
      ].join('\n\n')
    )

    const imports = await pretty(
      this.requiredImports
        .map((requiredImport) => {
          if (requiredImport.kind === 'type') {
            return `import type ${requiredImport.import} from '${requiredImport.from}'`
          }

          return `import ${requiredImport.import} from '${requiredImport.from}'`
        })
        .join('\n')
    )

    return { statefulStyles, appearanceStyles, imports }
  }

  async generateFileContent(): Promise<string> {
    const generated = await this.generateAppearanceStyles()

    return pretty(`
    ${generated.imports}
    ${generated.statefulStyles}
    ${generated.appearanceStyles}
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

  private generateVariantStatefulStyles(variant: string): string {
    const lines: Array<string> = []

    for (const state of this.#states) {
      const override = this.#options.stateOverrides?.[variant]
      const declaration = override ?? {
        fontColor: `vars.colors['${this.prefix}.${variant}.${state}.font']`,
        backgroundColor: `vars.colors['${this.prefix}.${variant}.${state}.background']`,
        borderColor: `vars.colors['${this.prefix}.${variant}.${state}.border']`,
      }

      lines.push(`const ${getAppearanceStylesName(variant, state)} = createAppearanceStyles({
        ${this.generateDeclaration(declaration)}
      })`)
    }

    return lines.join('\n\n')
  }

  private generateVariantAppearanceStyles(state: string): string {
    if (state === 'default') {
      const variantStyles = this.#variants
        .map((variant) => `${variant}: ${getAppearanceStylesName(variant, 'Default')},`)
        .join('\n')

      return `export const appearanceVariant = {
        ${variantStyles}
      }`
    }

    const stateName = capitalizeFirstLetter(state)

    const variantStyles = this.#variants
      .map((variant) => `${variant}${stateName}: ${getAppearanceStylesName(variant, stateName)},`)
      .join('\n')

    return `export const appearance${stateName} = {
      ${variantStyles}
    }`
  }

  private generateDeclaration(declaration: AppearanceStyleDeclaration): string {
    return Object.entries(declaration)
      .filter(([, value]) => typeof value !== 'undefined')
      .map(([property, value]) => `${property}: ${value},`)
      .join('\n')
  }

  private generateAppearanceExport(): string {
    const { appearanceExport } = this.#options

    if (!appearanceExport) return ''

    const variants = [...this.#variants]
      .sort()
      .map((variant) => `'${variant}'`)
      .join(' | ')
    const entries = this.#variants
      .map((variant) => {
        const states = Object.entries(appearanceExport.states)
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

    return `export const ${appearanceExport.name}: Record<${variants}, ${appearanceExport.typeName}> = {
      ${entries}
    }`
  }
}
