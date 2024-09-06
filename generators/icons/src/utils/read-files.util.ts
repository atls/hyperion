import type { Icon } from '../icons.interfaces'

import camelcase     from 'camelcase'
import fs            from 'fs-extra-promise'
import path          from 'path'

const createIcon = async (iconPath: string): Promise<Icon> => ({
  name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
    pascalCase: true,
  }).replace('50+', 'FiftyPlus')}Icon`,
  fileName: `${path.basename(iconPath, path.extname(iconPath)).replace('50+', 'FiftyPlus')}.icon`,
  source: (await fs.readFileAsync(iconPath)).toString(),
})

export const readFiles = async (files: Array<string>): Promise<Array<Icon>> =>
  Promise.all(files.map(createIcon))
