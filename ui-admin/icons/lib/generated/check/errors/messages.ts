import { fileDriftStates } from '../drift/interfaces.js'

export const commandFailedMessage = 'Command failed'

export const directoryRequiredMessage = 'Directory is required'

export const fileRequiredMessage = 'File is required'

export const filesOutdatedMessage = 'Generated files are outdated'

export const fileDriftStateMessages = {
  [fileDriftStates.different]: 'content differs',
  [fileDriftStates.missing]: 'missing committed file',
  [fileDriftStates.unexpected]: 'unexpected committed file',
}
