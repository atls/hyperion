export interface GetColorReplacementOptions {
  themePaths?: Array<string>
  color: string
}

export const getColorReplacement = (options: GetColorReplacementOptions) => ({
  [options.color]: `{(theme.colors${(options.themePaths || []).reduce(
    (str, prop) => `${str}.${prop}`,
    ''
  )}[props.color || 0] || props.color) || "${options.color}"}`,
})
