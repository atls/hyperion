import camelcase from 'camelcase'

export const getStylesName = (
  type: 'appearance' | 'shape',
  variant: string,
  state: string
): string => camelcase(`${type} ${variant} ${state} styles`)
