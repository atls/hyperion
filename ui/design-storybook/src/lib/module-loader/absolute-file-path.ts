import { isAbsolute } from 'node:path'
import { resolve }    from 'node:path'

export const toAbsoluteFilePath = (path: string): string =>
  isAbsolute(path) ? path : resolve(process.cwd(), path)
