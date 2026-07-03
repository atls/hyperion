import type { StorybookConfig } from '@storybook/react-webpack5'

export type WebpackFinal = NonNullable<StorybookConfig['webpackFinal']>
export type WebpackConfig = Parameters<WebpackFinal>[0]
