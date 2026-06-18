import type { GetSvgColorsOptions }    from './get-svg-colors.interfaces.js'

import { ATTRIBUTE_NAME_PATTERN }      from './regex.js'
import { ATTRIBUTE_PATTERN }           from './regex.js'
import { STYLE_PROPERTY_NAME_PATTERN } from './regex.js'
import { STYLE_PROPERTY_PATTERN }      from './regex.js'
import { valueGroupName }              from './get-svg-colors.constants.js'
import { normalizeAttributeName }      from './normalize-attribute-name.helper.js'
import { trimQuotes }                  from './trim-quotes.helper.js'
import { validateColor }               from './validate-color.helper.js'

const getColorAttributeNames = (options: GetSvgColorsOptions): Set<string> =>
  new Set(Array.from(options.colorAttributes ?? []).map(normalizeAttributeName))

const addAttributeColor = (
  colors: Set<string>,
  source: string,
  colorAttributes: Set<string>
): void => {
  for (const match of source.matchAll(ATTRIBUTE_PATTERN)) {
    const name = match[0].match(ATTRIBUTE_NAME_PATTERN)?.[0]
    const value = match.groups?.[valueGroupName]

    if (name && value && colorAttributes.has(normalizeAttributeName(name))) {
      colors.add(trimQuotes(value))
    }
  }
}

const addStyleColor = (colors: Set<string>, source: string, colorAttributes: Set<string>): void => {
  for (const match of source.matchAll(STYLE_PROPERTY_PATTERN)) {
    const name = match[0].match(STYLE_PROPERTY_NAME_PATTERN)?.[0]
    const value = match.groups?.[valueGroupName]

    if (name && value && colorAttributes.has(normalizeAttributeName(name))) {
      colors.add(trimQuotes(value))
    }
  }
}

export const getSvgColors = (source: string, options: GetSvgColorsOptions = {}): Array<string> => {
  const colors = new Set<string>()
  const colorAttributes = getColorAttributeNames(options)

  addAttributeColor(colors, source, colorAttributes)
  addStyleColor(colors, source, colorAttributes)

  const colorsArray = Array.from(colors)

  return colorsArray.filter((color) => validateColor(color, options))
}
