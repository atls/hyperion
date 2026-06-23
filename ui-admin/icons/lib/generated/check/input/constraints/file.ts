import type { FileSystemEntry } from '../file-system-entry.js'

import { FileRequiredError }    from '../../errors/file-required.error.js'
import { fileSystemEntryKinds } from '../file-system-entry.js'

export const requireFile = (entry: FileSystemEntry): void => {
  if (entry.kind !== fileSystemEntryKinds.file) {
    throw new FileRequiredError(entry.path)
  }
}
