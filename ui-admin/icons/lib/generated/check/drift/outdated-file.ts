export const outdatedFileReasons = {
  different: 'different',
  missing: 'missing',
  unexpected: 'unexpected',
} as const

export type OutdatedFileReason = (typeof outdatedFileReasons)[keyof typeof outdatedFileReasons]

export interface OutdatedFile {
  actualPath?: string
  expectedPath?: string
  reason: OutdatedFileReason
  relativePath: string
}
