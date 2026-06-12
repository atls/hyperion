export const loggerName = 'appearance-generator'

export const cliName = 'Appearance styles generator'

export const cliArguments = {
  schema: 'Path to style schema file',
}

export const cliOptions = {
  check: 'Check generated styles without writing files',
  write: 'Write generated styles',
}

export const errors = {
  schemaPathRequired: 'Path to style schema is required',
  modeRequired: 'Exactly one of --check or --write is required',
  schemaPathFileRequired: 'Style schema path should point to a file',
  schemaExportRequired: 'Style schema file should export schema',
}
