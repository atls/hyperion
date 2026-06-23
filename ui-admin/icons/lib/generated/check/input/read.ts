import { stat } from 'node:fs/promises'

export const inputPathKinds = {
  directory: 'directory',
  file: 'file',
  missing: 'missing',
  other: 'other',
  unavailable: 'unavailable',
} as const

const isMissingError = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  'code' in error &&
  (error as { code?: unknown }).code === 'ENOENT'

export const readInputPathKind = async (
  targetPath: string
): Promise<(typeof inputPathKinds)[keyof typeof inputPathKinds]> => {
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
    return isMissingError(error) ? inputPathKinds.missing : inputPathKinds.unavailable
  }
}
