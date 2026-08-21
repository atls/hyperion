export type DesignStorybookCommand = 'build' | 'dev' | 'prepare'

export interface CliOptions {
  command: DesignStorybookCommand
  configDir: string
  configPath: string
  outputDir: string
  port: string
}
