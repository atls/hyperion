import type { OutdatedFile }   from '../drift/outdated-file.js'

import { GeneratedError }      from './generated.js'
import { outdatedFileReasons } from '../drift/outdated-file.js'
import { generatedErrorCodes } from './codes.js'

const outdatedFilesMessage = 'Generated files are outdated'

const outdatedFileReasonMessages = {
  [outdatedFileReasons.different]: 'content differs',
  [outdatedFileReasons.missing]: 'missing committed file',
  [outdatedFileReasons.unexpected]: 'unexpected committed file',
}

const formatFile = (file: OutdatedFile): string =>
  `${file.relativePath}: ${outdatedFileReasonMessages[file.reason]}`

export class FilesOutdatedError extends GeneratedError {
  readonly files: Array<OutdatedFile>

  constructor(files: Array<OutdatedFile>) {
    super(
      generatedErrorCodes.filesOutdated,
      [outdatedFilesMessage, ...files.map(formatFile)].join('\n')
    )

    this.files = files
  }
}
