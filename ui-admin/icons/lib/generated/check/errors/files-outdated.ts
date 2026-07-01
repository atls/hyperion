import type { FileDrift }      from '../drift/interfaces.js'

import { GeneratedError }      from './generated.js'
import { fileDriftStates }     from '../drift/interfaces.js'
import { generatedErrorCodes } from './codes.js'

const outdatedFilesMessage = 'Generated files are outdated'

const fileDriftStateMessages = {
  [fileDriftStates.different]: 'content differs',
  [fileDriftStates.missing]: 'missing committed file',
  [fileDriftStates.unexpected]: 'unexpected committed file',
}

const formatFile = (file: FileDrift): string =>
  `${file.relativePath}: ${fileDriftStateMessages[file.state]}`

export class FilesOutdatedError extends GeneratedError {
  readonly files: Array<FileDrift>

  constructor(files: Array<FileDrift>) {
    super(
      generatedErrorCodes.filesOutdated,
      [outdatedFilesMessage, ...files.map(formatFile)].join('\n')
    )

    this.files = files
  }
}
