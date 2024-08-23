export interface GetColorReplacementOptions {
  themePaths?: Array<string>
  color: string
}

export const getColorReplacement = (options: GetColorReplacementOptions) => ({
  [options.color]: `{(vars.colors${(options.themePaths || []).reduce(
    (str, prop) => `${str}.${prop}`,
    ''
  )}[props.color || 0] || props.color) || "${options.color}"}`,
})
