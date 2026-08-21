export type StorybookArgs = Array<string>
export type StorybookCommand = 'build' | 'dev'

export interface StorybookPackageJson {
  bin: string
}

export interface StorybookCommandArgsParams {
  command: StorybookCommand
  configDir: string
  outputDir: string
  port: string
}

export interface StorybookRuntimeOptions {
  command: StorybookCommand
  configDir: string
  outputDir: string
  port: string
}
