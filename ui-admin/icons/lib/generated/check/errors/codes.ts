export const generatedErrorCodes = {
  commandFailed: 'generated.command_failed',
  directoryRequired: 'generated.directory_required',
  fileRequired: 'generated.file_required',
  filesOutdated: 'generated.files_outdated',
} as const

export type GeneratedErrorCode = (typeof generatedErrorCodes)[keyof typeof generatedErrorCodes]
