import path      from 'node:path'

import camelcase from 'camelcase'

interface GetIconNamesReturn {
  name: string
  fileName: string
}

export const getIconNames = (iconPath: string): GetIconNamesReturn => {
  const baseName = path.basename(iconPath, path.extname(iconPath))

  const pascalCaseName = camelcase(baseName, { pascalCase: true })

  return {
    name: `${pascalCaseName.replace('50+', 'FiftyPlus')}Icon`,
    fileName: `${baseName.replace('50+', 'FiftyPlus')}.icon`,
  }
}
