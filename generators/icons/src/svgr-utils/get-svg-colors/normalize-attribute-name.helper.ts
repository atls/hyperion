import { NON_WORD_PATTERN } from './regex.js'

export const normalizeAttributeName = (name: string): string =>
  name.replace(NON_WORD_PATTERN, '').toLowerCase()
