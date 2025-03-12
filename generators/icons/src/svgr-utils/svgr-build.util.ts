import type { Replacements } from '../icons.interfaces.js'

import { glob }              from 'glob'

import { compileIcons }      from './compile-icons.util.js'
import { createFiles }       from './create-files.util.js'
import { readFiles }         from './read-files.util.js'

export const svgrBuild = async (
  iconsPath: string,
  targetDir: string,
  replacements: Replacements
): Promise<void> => {
  const prettifyIconsPath = (): string => {
    const parts = iconsPath.split('')
    if (parts[parts.length - 1] === '/') {
      parts.pop()
      return parts.join('')
    }

    return iconsPath
  }

  const files = await glob(`${prettifyIconsPath()}/*.svg`)
  const icons = readFiles(files)

  const sources = await compileIcons(
    icons.filter((icon) => icon.source),
    replacements
  )

  await createFiles(sources, targetDir)
}
