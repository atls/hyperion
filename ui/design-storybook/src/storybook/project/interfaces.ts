import type { DesignStorybookConfig } from '../../config/index.js'

export interface LoadedDesignConfig {
  config: DesignStorybookConfig
  path: string
}

export interface StorybookProjectOptions {
  configDir: string
}

export interface StorybookProjectSources {
  main: string
  matrixStory?: string
  preview: string
}
