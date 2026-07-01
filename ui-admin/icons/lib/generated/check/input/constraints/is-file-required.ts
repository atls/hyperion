import { inputPathKinds } from '../read.js'

export const isFileRequired = (
  kind: (typeof inputPathKinds)[keyof typeof inputPathKinds]
): boolean => kind !== inputPathKinds.file
