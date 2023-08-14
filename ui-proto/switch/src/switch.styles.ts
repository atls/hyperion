import { styleFn }    from 'styled-system'
import { ifProp }     from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

export const appearanceDefaultHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.default.background,
  borderColor: 'transparent',
})

export const appearanceDefaultHoverHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.default.hover.background,
  borderColor: 'transparent',
})

export const appearanceDefaultDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.default.disabled.background,
  borderColor: 'transparent',
})

export const appearanceCheckedHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.checked.background,
  borderColor: 'transparent',
})

export const appearanceCheckedHoverHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.checked.hover.background,
  borderColor: 'transparent',
})

export const appearanceCheckedDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.checked.disabled.background,
  borderColor: 'transparent',
})

export const shapeNormalSizeHandleStyles: styleFn = () => ({
  height: 20,
  width: 32,
})

export const shapeNormalSizeThumbStyles: styleFn = () => ({
  height: 16,
  width: 16,
})

export const appearanceHandleStyles = ifProp(
  prop('checked', false),
  ifProp(
    prop('disabled', false),
    appearanceCheckedDisabledHandleStyles,
    ifProp(prop('hover', false), appearanceCheckedHoverHandleStyles, appearanceCheckedHandleStyles)
  ),
  ifProp(
    prop('disabled', false),
    appearanceDefaultDisabledHandleStyles,
    ifProp(prop('hover', false), appearanceDefaultHoverHandleStyles, appearanceDefaultHandleStyles)
  )
)

export const appearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.thumb,
})

export const shapeHandleStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeHandleStyles,
})

export const shapeThumbStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeThumbStyles,
})
