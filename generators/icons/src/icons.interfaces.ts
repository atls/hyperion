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

export type ReplacementIconColors = Record<string, Array<string> | string>

export interface ResolvedIconsPath {
  outputPath: string
  iconsPath: string
}
