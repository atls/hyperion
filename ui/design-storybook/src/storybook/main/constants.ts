export const storybookReactWebpackPackage = '@storybook/react-webpack5'
export const designStorybookMainModule = '@atls-ui/design-storybook/main'

export const javascriptExtension = '.js'
export const javascriptExtensionAlias = ['.ts', '.tsx', '.js']

export const webpackFallbacks = {
  assert: false,
  url: false,
  zlib: false,
} as const
