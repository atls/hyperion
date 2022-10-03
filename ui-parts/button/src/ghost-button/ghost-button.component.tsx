import styled                from '@emotion/styled'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { ButtonProps }       from '../button.interfaces'
import { baseStyles }        from './ghost-button.styles'
import { nulledGhostStyles } from './ghost-button.styles'
import { shapeGhostStyles }  from './ghost-button.styles'
import { contentStyles }     from './ghost-button.styles'

const ButtonElement = styled.button(baseStyles, nulledGhostStyles, shapeGhostStyles, contentStyles)

const GhostButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => (
  <ButtonElement {...props}>{children}</ButtonElement>
)

export { GhostButton }
