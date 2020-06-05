import { createShouldForwardProp }            from '@styled-system/should-forward-prop'
import { border, color, styleFn, typography } from 'styled-system'
import { ifProp, switchProp }                 from 'styled-tools'

import styled                                 from '@emotion/styled'

import { offset }                             from './PrefixSuffix'

const clear: styleFn = () => ({
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  width: '100%',
})

const base: styleFn = ({ theme }) => ({
  '&::placeholder': {
    color: theme.colors.silver,
  },
})

const size: styleFn = switchProp('size', ({ theme }) => ({
  normal: {
    fontSize: theme.fontSizes.tiny,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  medium: {
    fontSize: theme.fontSizes.normal,
    height: 58,
    paddingLeft: 24,
    paddingRight: 24,
  },
  large: {
    fontSize: theme.fontSizes.regular,
    height: 64,
    paddingLeft: 28,
    paddingRight: 28,
  },
}))

const attach: styleFn = switchProp('attach', () => ({
  left: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  right: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  both: {
    borderRadius: 0,
  },
}))

const invalid: styleFn = ifProp('invalid', ({ theme }) => ({
  borderColor: theme.colors.red,
}))

const shouldForwardProp = createShouldForwardProp([
  'fontFamily',
  'fontWeight',
  'borderRadius',
  'color',
  'prefix',
])

const StyledInput = styled('input', { shouldForwardProp })(
  clear,
  base,
  typography,
  border,
  color,
  size,
  offset,
  attach,
  invalid
)

StyledInput.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'medium',
  borderRadius: 'extra',
  border: 'black',
  color: 'black',
  bg: 'white',
}

export { StyledInput }
