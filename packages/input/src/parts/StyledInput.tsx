import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import {
  border,
  color,
  height,
  minHeight,
  minWidth,
  space,
  styleFn,
  typography,
  width,
} from 'styled-system'
import { ifProp, switchProp }      from 'styled-tools'

import styled                      from '@emotion/styled'
import { withTheme }               from '@emotion/react'

import { offset }                  from './PrefixSuffix'

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
  offset,
  attach,
  invalid,
  height,
  width,
  minHeight,
  minWidth,
  space,
)

StyledInput.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'medium',
  borderRadius: 'extra',
  border: 'black',
  color: 'black',
  bg: 'white',
}

export default withTheme(StyledInput)
