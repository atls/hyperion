export interface GetColorReplacementOptions {
  color: string
}

export type GetColorReplacement = (options: GetColorReplacementOptions) => Record<string, string>
