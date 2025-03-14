export const getColorReplacement = (options: {
  themePaths?: Array<string>
  color: string
}): Record<string, string> => ({
  [options.color]: `{(color && vars.colors${(options.themePaths || []).reduce(
    (str, prop) => `${str}.${prop}`,
    ''
  )}[color]) || color || "${options.color}"}`,
})
