import React                                                   from 'react'
import styled                                                  from '@emotion/styled'
import { background, border, flexbox, height, padding, width } from 'styled-system'

import { StyledButtonProps }                                   from './types'
import { divideChildren }                                      from './utils'

const base: any = () => ({
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

const StyledButton = styled('button')<StyledButtonProps>(
  base,
  border,
  flexbox,
  height,
  width,
  padding,
  background
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
}

export { Button }
