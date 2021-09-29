import styled                                   from '@emotion/styled'
import React, { FunctionComponent, forwardRef } from 'react'

import { Arrow }                                from '@atls-ui-parts/tooltip'

import { ContainerInner }                       from '../container-inner'
import { ContainerTitle }                       from '../container-title'
import { ContainerElement }                     from './container.element'
import { ContainerComponentProps }              from './container.interfaces'
import { baseContainerStyles }                  from './container.styles'

const StyledContainer = styled(ContainerElement)(baseContainerStyles)

export const Container: FunctionComponent<ContainerComponentProps> = forwardRef(
  ({ content, showArrow, arrowStyle, layerSide, title, ...props }, ref) => (
    <StyledContainer ref={ref} {...props}>
      {title && <ContainerTitle>{title}</ContainerTitle>}
      {content && <ContainerInner>{content}</ContainerInner>}
      {showArrow && (
        <Arrow
          style={arrowStyle}
          layerSide={layerSide}
          backgroundColor='#fff'
          angle={35}
          size={8}
        />
      )}
    </StyledContainer>
  )
)
