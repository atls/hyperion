import React                                       from 'react'
import styled                                      from '@emotion/styled'
import { border, color, flexbox, layout, padding } from 'styled-system'

import { StyledButtonProps }                       from './types'
import { divideChildren }                          from './utils'

const base: any = () => ({
  boxSizing: 'border-box',
  display: 'flex',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  padding: 0,
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  fontFamily: 'inherit',
  textAlign: 'inherit',
  letterSpacing: 'inherit',
  color: 'inherit',
  '&:active': {
    transform: 'scale(0.98)',
  },
})

const StyledButton = styled('button')<StyledButtonProps>(
  base,
  border,
  flexbox,
  layout,
  padding,
  color
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
  alignItems: 'center',
}

export { Button }
