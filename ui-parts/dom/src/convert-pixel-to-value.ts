export const convertPixelToValue = (styleValue: string): number => {
  const value = Number(styleValue.replace('px', ''))

  if (Number.isNaN(value)) {
    return 0
  }

  return value
}
