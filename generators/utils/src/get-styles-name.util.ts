import camelcase from 'camelcase'

const getStylesName = (type: 'shape' | 'appearance', variant: string, state: string): string =>
  camelcase(`${type} ${variant} ${state} styles`)

export { getStylesName }
