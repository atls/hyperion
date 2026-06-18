import { readFile } from 'node:fs/promises'

export const isOutdatedFile = async (expectedPath: string, actualPath: string): Promise<boolean> =>
  !(await readFile(expectedPath)).equals(await readFile(actualPath))
