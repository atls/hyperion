import { TextareaContainerProps } from '../textarea-container.interfaces.js'

export const getRoundingStyles = (
  rounding: TextareaContainerProps['rounding'],
  attach: TextareaContainerProps['attach']
) => {
  if (attach === 'right') {
    return {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: rounding,
      borderTopLeftRadius: rounding,
    }
  }

  if (attach === 'left') {
    return {
      borderBottomRightRadius: rounding,
      borderTopRightRadius: rounding,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    }
  }

  return { borderRadius: 0 }
}
