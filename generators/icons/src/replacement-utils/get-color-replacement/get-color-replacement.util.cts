export const getColorReplacement = (options: {
  themePaths?: Array<string>
  color: string
}): Record<string, string> => ({
  [options.color]: `currentColor`,
})
