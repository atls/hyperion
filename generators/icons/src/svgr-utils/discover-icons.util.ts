/* eslint-disable n/no-sync */

import type { Icon }    from '../icons.interfaces.js'

import fs               from 'node:fs'

import { glob }         from 'glob'

import { getIconNames } from '@atls-ui-generators/utils'

const createIcon = (iconPath: string): Icon => ({
  ...getIconNames(iconPath),
  source: fs.readFileSync(iconPath).toString(),
})

export const discoverIcons = async (svgDirectory: string): Promise<Array<Icon>> => {
  const files = await glob(`${svgDirectory}/*.svg`)

  return files.map(createIcon)
}
