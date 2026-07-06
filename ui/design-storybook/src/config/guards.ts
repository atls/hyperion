export const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value)

export const isStringArray = (value: unknown): value is Array<string> =>
  Array.isArray(value) && value.every((item) => typeof item === 'string')

export const isImportSpecifier = (value: unknown): boolean =>
  isRecord(value) && typeof value.module === 'string' && typeof value.exportName === 'string'

const isStoriesSpecifier = (value: unknown): boolean =>
  isRecord(value) &&
  typeof value.directory === 'string' &&
  (value.files === undefined || typeof value.files === 'string') &&
  (value.titlePrefix === undefined || typeof value.titlePrefix === 'string')

const isStoriesEntry = (value: unknown): boolean =>
  typeof value === 'string' || isStoriesSpecifier(value)

export const isStories = (value: unknown): boolean =>
  typeof value === 'string' || (Array.isArray(value) && value.every(isStoriesEntry))
