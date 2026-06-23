import type { OutdatedFile }          from '../drift/outdated-file.js'

import { outdatedFileReasonMessages } from '../constants.js'
import { outdatedFilesMessage }       from '../constants.js'

const formatFile = (file: OutdatedFile): string =>
  `${file.relativePath}: ${outdatedFileReasonMessages[file.reason]}`

export class GeneratedFilesOutdatedError extends Error {
  constructor(files: Array<OutdatedFile>) {
    super([outdatedFilesMessage, ...files.map(formatFile)].join('\n'))
  }
}
