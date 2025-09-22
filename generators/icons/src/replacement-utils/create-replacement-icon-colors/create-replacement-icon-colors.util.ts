import type { Icon }                  from '../../icons.interfaces.js'
import type { ReplacementIconColors } from '../../icons.interfaces.js'

import { compileIconJsx }             from '../../svgr-utils/index.js'
import { getSvgColors }               from '../../svgr-utils/index.js'
import { getSvgColorsOptions }        from './create-replacement-icon-colors.constants.js'

export const createReplacementIconColors = async (
  icons: Array<Icon>
): Promise<ReplacementIconColors> => {
  const promises = icons.map(async (icon) => {
    const source = await compileIconJsx(icon)

    const colors = getSvgColors(source, getSvgColorsOptions)

    if (colors.length === 1) {
      return [icon.name, colors[0]] as const
    }

    return [icon.name, colors] as const
  })

  const entries = (await Promise.all(promises)).filter(([key, value]) => Boolean(value.length))

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object.fromEntries(entries)
}
