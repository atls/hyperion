import type { outdatedFileReasons } from './constants.js'

export type OutdatedFileReason = (typeof outdatedFileReasons)[keyof typeof outdatedFileReasons]

export interface OutdatedFile {
  actualPath?: string
  expectedPath?: string
  reason: OutdatedFileReason
  relativePath: string
}

export interface DirectoryComparisonOptions {
  actualPath: string
  expectedPath: string
}

export interface CommandOptions {
  cwd?: string
}
