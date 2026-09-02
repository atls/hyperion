import type { FileDrift }         from '../drift/interfaces.js'

import { GeneratedError }         from './generated.js'
import { generatedErrorCodes }    from './codes.js'
import { fileDriftStateMessages } from './messages.js'
import { filesOutdatedMessage }   from './messages.js'

const formatFile = (file: FileDrift): string =>
  `${file.relativePath}: ${fileDriftStateMessages[file.state]}`

export class FilesOutdatedError extends GeneratedError {
  readonly files: Array<FileDrift>

  constructor(files: Array<FileDrift>) {
    super(
      generatedErrorCodes.filesOutdated,
      [filesOutdatedMessage, ...files.map(formatFile)].join('\n')
    )

    this.files = files
  }
}
