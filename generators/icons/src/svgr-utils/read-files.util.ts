/* eslint-disable n/no-sync */

import type { Icon }    from '../icons.interfaces.js'

import fs               from 'node:fs'

import { getIconNames } from '@atls-ui-generators/utils'

const createIcon = (iconPath: string): Icon => ({
  ...getIconNames(iconPath),
  source: fs.readFileSync(iconPath).toString(),
})

export const readFiles = (files: Array<string>): Array<Icon> => files.map(createIcon)
