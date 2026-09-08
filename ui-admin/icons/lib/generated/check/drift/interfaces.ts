import type { fileDriftStates } from './constants.js'

export type FileDriftState = (typeof fileDriftStates)[keyof typeof fileDriftStates]

export interface FileDrift {
  actualPath?: string
  expectedPath?: string
  relativePath: string
  state: FileDriftState
}

export interface DirectoryComparisonOptions {
  actualPath: string
  expectedPath: string
}
