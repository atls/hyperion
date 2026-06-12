import type { ImportSchema } from './interfaces.js'

export const defaultThemeImport: ImportSchema = {
  import: '{ createAppearanceStyles, vars }',
  from: '@atls-ui-parts/theme',
}

export const errors = {
  prefixRequired: 'Prefix is required',
  variantsRequired: 'Variants are required',
  statesRequired: 'States are required',
}
