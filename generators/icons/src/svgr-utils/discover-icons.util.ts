/* eslint-disable n/no-sync */

import type { Icon }    from '../icons.interfaces.js'

import fs               from 'node:fs'

import { glob }         from 'glob'
import isSvg            from 'is-svg'

import { getIconNames } from '@atls-ui-generators/utils'

const createIcon = (iconPath: string): Icon => ({
  ...getIconNames(iconPath),
  source: fs.readFileSync(iconPath).toString(),
})

export const discoverIcons = async (svgDirectory: string): Promise<Array<Icon>> => {
  const files = await glob(`${svgDirectory}/**/*.svg`, { nodir: true })

  const icons = files.map(createIcon)

  return icons.filter((icon) => isSvg(icon.source))
}
