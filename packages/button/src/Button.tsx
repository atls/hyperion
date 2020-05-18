import React                                   from 'react'
import styled                                  from '@emotion/styled'
import { createShouldForwardProp }             from '@styled-system/should-forward-prop'
import { border, flexbox, system, typography } from 'styled-system'
import { ifProp, switchProp }                  from 'styled-tools'

import { StyledButtonProps }                   from './types'
import { divideChildren }                      from './utils'

const base: any = ({ theme }) => ({
  fontFamily: theme.fonts.default,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  padding: 0,
  '&:active': {
    transform: 'scale(0.98)',
  },
})

const fill = ifProp('fill', { width: '100%' })

const colors = switchProp('color', ({ theme }) => ({
  default: {
    background: theme.colors.default,
  },
  primary: {
    background: theme.colors.primary,
  },
  secondary: {
    background: theme.colors.secondary,
  },
}))

const sizes = switchProp('size', ({ theme, equal }) => ({
  small: {
    fontSize: theme.fontSizes.default,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 36 : null,
    height: 36,
  },
  normal: {
    fontSize: theme.fontSizes.default,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 40 : null,
    height: 40,
  },
  large: {
    fontSize: theme.fontSizes.default,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 48 : null,
    height: 48,
  },
}))

const bg = system({
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
})

const shouldForwardProp = createShouldForwardProp(['fill', 'size', 'color', 'equal'])

const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>(
  base,
  fill,
  sizes,
  colors,
  border,
  typography,
  bg,
  flexbox
)

const ContentPart = styled.span({
  marginRight: '12px',
  display: 'flex',
})

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{divideChildren(children, ContentPart)}</StyledButton>
)

Button.defaultProps = {
  borderRadius: 'normal',
  justifyContent: 'center',
  color: 'white',
  size: 'normal',
}

export { Button }
