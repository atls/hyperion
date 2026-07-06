const unknownExitCode = 'unknown'

export const createStorybookFailedError = (code: number | null): Error =>
  new Error(`storybook_failed:${code ?? unknownExitCode}`)
