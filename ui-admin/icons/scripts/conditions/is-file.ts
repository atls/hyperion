import { stat } from 'node:fs/promises'

export const isFile = async (targetPath: string): Promise<boolean> => {
  try {
    return (await stat(targetPath)).isFile()
  } catch {
    return false
  }
}
