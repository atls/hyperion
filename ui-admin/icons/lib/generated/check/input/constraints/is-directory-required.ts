import { inputPathKinds } from '../read.js'

export const isDirectoryRequired = (
  kind: (typeof inputPathKinds)[keyof typeof inputPathKinds]
): boolean => kind !== inputPathKinds.directory
