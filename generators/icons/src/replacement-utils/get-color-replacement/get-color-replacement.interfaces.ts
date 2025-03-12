export interface GetColorReplacementOptions {
  themePaths?: Array<string>
  color: string
}

export type GetColorReplacement = (options: GetColorReplacementOptions) => Record<string, string>
