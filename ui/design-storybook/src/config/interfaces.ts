import type { Preview }         from '@storybook/react'
import type { StorybookConfig } from '@storybook/react-webpack5'

export interface DesignImportSpecifier {
  exportName: string
  module: string
}

export interface MatrixItemConfig {
  component: DesignImportSpecifier
  name: string
  variants: DesignImportSpecifier
}

export interface MatrixConfig {
  components: Array<MatrixItemConfig>
  title?: string
}

export interface DesignStorybookConfig {
  addons?: NonNullable<StorybookConfig['addons']>
  decorators?: Preview['decorators']
  matrix?: MatrixConfig
  parameters?: Preview['parameters']
  refs?: StorybookConfig['refs']
  stories: NonNullable<StorybookConfig['stories']>
  styleEntrypoints?: Array<string>
  webpackFinal?: StorybookConfig['webpackFinal']
}
