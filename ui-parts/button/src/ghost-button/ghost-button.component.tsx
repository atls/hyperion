import styled                  from '@emotion/styled'

import React                   from 'react'
import { FC }                  from 'react'
import { PropsWithChildren }   from 'react'

import { ButtonProps }         from '../button.interfaces'
import { createBaseStyles }    from '../base'
import { createContentStyles } from '../content'
import { createGhostStyles }   from '../shape'

const ButtonElement = styled.button(createGhostStyles(), createBaseStyles(), createContentStyles())

const GhostButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => (
  <ButtonElement {...props}>{children}</ButtonElement>
)

export { GhostButton }
