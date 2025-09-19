import type { Icon }                  from '../../icons.interfaces.js'
import type { ReplacementIconColors } from '../../icons.interfaces.js'

import { compileIconJsx }             from '../../svgr-utils/index.js'
import { getSvgColors }               from '../../svgr-utils/index.js'

export const createReplacementIconColors = async (
  icons: Array<Icon>
): Promise<ReplacementIconColors> => {
  const items: ReplacementIconColors = {}

  const promises: Array<Promise<void>> = icons.map(async (icon) => {
    const fillItems = async (): Promise<void> => {
      const source = await compileIconJsx(icon)

      const colors = getSvgColors(source)

      if (colors.length === 1) {
        ;[items[icon.name]] = colors
      }

      if (colors.length > 1) {
        items[icon.name] = colors
      }
    }

    return fillItems()
  })

  await Promise.all(promises)

  return items
}
