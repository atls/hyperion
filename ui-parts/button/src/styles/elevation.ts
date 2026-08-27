const splitElevation = (elevation: string): Array<string> => {
  const shadows: Array<string> = []
  let depth = 0
  let start = 0

  for (let index = 0; index < elevation.length; index += 1) {
    if (elevation[index] === '(') depth += 1
    if (elevation[index] === ')') depth -= 1

    if (elevation[index] === ',' && depth === 0) {
      shadows.push(elevation.slice(start, index).trim())
      start = index + 1
    }
  }

  shadows.push(elevation.slice(start).trim())

  return shadows
}

const getAlpha = (color: string): number => {
  const value = color.trim().toLowerCase()

  if (value === 'transparent') return 0

  if (value.startsWith('#')) {
    const hex = value.slice(1)

    if (hex.length === 4) return Number.parseInt(hex[3].repeat(2), 16) / 255
    if (hex.length === 8) return Number.parseInt(hex.slice(6), 16) / 255

    return 1
  }

  const openingParenthesis = value.indexOf('(')
  const colorFunction = value.slice(0, openingParenthesis)

  if (
    openingParenthesis < 0 ||
    !value.endsWith(')') ||
    !['hsl', 'hsla', 'rgb', 'rgba'].includes(colorFunction)
  ) {
    return 1
  }

  const content = value.slice(openingParenthesis + 1, -1)
  const components = content.includes('/') ? content.split('/') : content.split(',')
  const alpha = components.length === 2 ? components[1] : components[3]

  if (!alpha) return 1

  const parsed = Number.parseFloat(alpha)

  return alpha.includes('%') ? parsed / 100 : parsed
}

export const applyBackgroundAlpha = (elevation: string, background: string): string => {
  const alpha = getAlpha(background)

  if (alpha === 1) return elevation

  return splitElevation(elevation)
    .map((shadow) =>
      shadow.replace(
        /(#[\da-f]{3,8}|(?:rgb|hsl)a?\([^)]*\)|var\([^)]*\)|transparent|currentcolor)\s*$/i,
        (color) => `color-mix(in srgb, ${color} ${alpha * 100}%, transparent)`
      ))
    .join(', ')
}
