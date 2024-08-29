import type { TextareaContainerProps }  from '../textarea-container.interfaces.js'
import type { GetRoundingStylesReturn } from './get-rounding-styles.interfaces.js'

export const getRoundingStyles = (
  rounding: TextareaContainerProps['rounding'],
  attach: TextareaContainerProps['attach']
): GetRoundingStylesReturn => {
  if (attach === 'right') {
    return {
      borderBottomRightRadius: '0',
      borderTopRightRadius: '0',
      borderBottomLeftRadius: rounding,
      borderTopLeftRadius: rounding,
    }
  }

  if (attach === 'left') {
    return {
      borderBottomRightRadius: rounding,
      borderTopRightRadius: rounding,
      borderBottomLeftRadius: '0',
      borderTopLeftRadius: '0',
    }
  }

  return { borderRadius: '0' }
}
