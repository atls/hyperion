import { stat } from 'node:fs/promises'

export const isDirectory = async (targetPath: string): Promise<boolean> => {
  try {
    return (await stat(targetPath)).isDirectory()
  } catch {
    return false
  }
}
