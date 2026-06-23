import { DirectoryRequiredError } from '../../errors/directory-required.js'
import { inputPathKinds }         from '../read.js'

export const requireDirectory = (
  targetPath: string,
  kind: (typeof inputPathKinds)[keyof typeof inputPathKinds]
): void => {
  if (kind !== inputPathKinds.directory) {
    throw new DirectoryRequiredError(targetPath)
  }
}
