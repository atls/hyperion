import type { FileSystemEntry }   from '../file-system-entry.js'

import { DirectoryRequiredError } from '../../errors/directory-required.error.js'
import { fileSystemEntryKinds }   from '../file-system-entry.js'

export const requireDirectory = (entry: FileSystemEntry): void => {
  if (entry.kind !== fileSystemEntryKinds.directory) {
    throw new DirectoryRequiredError(entry.path)
  }
}
