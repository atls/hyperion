import camelcase from 'camelcase'

const getStylesName = (type: 'appearance' | 'shape', variant: string, state: string): string =>
  camelcase(`${type} ${variant} ${state} styles`)

export { getStylesName }
