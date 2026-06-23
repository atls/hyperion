import { FileRequiredError } from '../../errors/file-required.js'
import { inputPathKinds }    from '../read.js'

export const requireFile = (
  targetPath: string,
  kind: (typeof inputPathKinds)[keyof typeof inputPathKinds]
): void => {
  if (kind !== inputPathKinds.file) {
    throw new FileRequiredError(targetPath)
  }
}
