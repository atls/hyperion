import type { Replacements }  from '../interfaces.js'

import { compileIcons }       from './compile-icons/index.js'
import { discoverIcons }      from './discover-icons.js'
import { writeCompiledIcons } from './write-compiled-icons.js'

export const buildSvgr = async (
  iconsPath: string,
  targetDir: string,
  replacements: Replacements
): Promise<void> => {
  const icons = await discoverIcons(iconsPath)

  const sources = await compileIcons(icons, replacements)

  await writeCompiledIcons(sources, targetDir)
}
