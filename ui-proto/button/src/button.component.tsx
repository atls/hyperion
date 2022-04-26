import isPropValid       from '@emotion/is-prop-valid'
import styled            from '@emotion/styled'

import React             from 'react'
import { FC }            from 'react'

import { Content }       from '@atls-ui-parts/button'

import { ButtonProps }   from './button.interfaces'
import { baseStyles }    from './button.styles'
import { shapeStyles }   from './button.styles'
import { contentStyles } from './button.styles'
import { variantStyles } from './button.styles'

const shouldForwardProp = (prop) => isPropValid(prop) && !['fill'].includes(prop)

export const ButtonElement = styled('button', { shouldForwardProp })(
  baseStyles,
  contentStyles,
  shapeStyles,
  variantStyles
)

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonElement {...props}>
    <Content divider={12}>{children}</Content>
  </ButtonElement>
)
