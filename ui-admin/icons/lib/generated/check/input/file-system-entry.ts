import { stat } from 'node:fs/promises'

export const fileSystemEntryKinds = {
  directory: 'directory',
  file: 'file',
  missing: 'missing',
  other: 'other',
  unavailable: 'unavailable',
} as const

export type FileSystemEntryKind = (typeof fileSystemEntryKinds)[keyof typeof fileSystemEntryKinds]

export interface FileSystemEntry {
  error?: unknown
  kind: FileSystemEntryKind
  path: string
}

const isMissingError = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  'code' in error &&
  (error as { code?: unknown }).code === 'ENOENT'

export const readFileSystemEntry = async (targetPath: string): Promise<FileSystemEntry> => {
  try {
    const stats = await stat(targetPath)

    if (stats.isDirectory()) {
      return {
        kind: fileSystemEntryKinds.directory,
        path: targetPath,
      }
    }

    if (stats.isFile()) {
      return {
        kind: fileSystemEntryKinds.file,
        path: targetPath,
      }
    }

    return {
      kind: fileSystemEntryKinds.other,
      path: targetPath,
    }
  } catch (error) {
    return {
      error,
      kind: isMissingError(error) ? fileSystemEntryKinds.missing : fileSystemEntryKinds.unavailable,
      path: targetPath,
    }
  }
}
