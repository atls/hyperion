import type { Config } from '@svgr/core'

export interface Icon {
  name: string
  source: string
  fileName: string
}

export interface Source {
  name: string
  code: string
  withReplacement: boolean
}

export type Replacements = Record<string, Record<string, string>>

export type CreateSvgrTemplate = (withReplacement: boolean) => Config['template']
