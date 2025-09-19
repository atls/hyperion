import { load }                        from 'cheerio'

import { STYLE_COLOR_ATTRIBUTE_KEY }   from '../icons.constants.js'
import { ignoredColorAttributeValues } from '../icons.constants.js'
import { colorAttributes }             from '../icons.constants.js'

export const getSvgColors = (source: string): Array<string> => {
  const colors = new Set<string>()

  const cheerio = load(source, { xml: true })

  cheerio('*').each((index, element) => {
    const attributes = cheerio(element).attr() ?? {}

    Object.entries(attributes).forEach(([name, value]) => {
      if (colorAttributes.has(name)) {
        colors.add(value)
      }

      if (name === STYLE_COLOR_ATTRIBUTE_KEY) {
        colorAttributes.forEach((colorAttribute) => {
          colors.add(cheerio(element).css(colorAttribute) || '')
        })
      }
    })
  })

  return Array.from(colors).filter(
    (color) => Boolean(color) && !ignoredColorAttributeValues.has(color)
  )
}
