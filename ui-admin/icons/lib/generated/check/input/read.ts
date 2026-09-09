import { stat } from 'node:fs/promises'

export const inputPathKinds = {
  directory: 'directory',
  file: 'file',
  missing: 'missing',
  other: 'other',
  unavailable: 'unavailable',
} as const

export type InputPathKind = (typeof inputPathKinds)[keyof typeof inputPathKinds]

const missingInputPathErrorCode = 'ENOENT'

const resolveFailedInputPathKind = (error: unknown): InputPathKind => {
  if (error instanceof Error && 'code' in error && error.code === missingInputPathErrorCode) {
    return inputPathKinds.missing
  }

  return inputPathKinds.unavailable
}

export const readInputPathKind = async (targetPath: string): Promise<InputPathKind> => {
  try {
    const stats = await stat(targetPath)

    if (stats.isDirectory()) {
      return inputPathKinds.directory
    }

    if (stats.isFile()) {
      return inputPathKinds.file
    }

    return inputPathKinds.other
  } catch (error) {
    return resolveFailedInputPathKind(error)
  }
}
