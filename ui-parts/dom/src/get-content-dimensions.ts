import { convertPixelToValue } from './convert-pixel-to-value'

interface ContentDimensions {
  width: number
  height: number
}

export const getContentDimensions = (element: HTMLElement): ContentDimensions => {
  const style = getComputedStyle(element, null)

  const offsetWidth =
    convertPixelToValue(style.paddingLeft) +
    convertPixelToValue(style.paddingRight) +
    convertPixelToValue(style.borderLeftWidth) +
    convertPixelToValue(style.borderRightWidth)

  const offsetHeight =
    convertPixelToValue(style.paddingTop) +
    convertPixelToValue(style.paddingBottom) +
    convertPixelToValue(style.borderTopWidth) +
    convertPixelToValue(style.borderBottomWidth)

  return {
    width: element.offsetWidth - offsetWidth,
    height: element.offsetHeight - offsetHeight,
  }
}
