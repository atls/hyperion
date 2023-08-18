import styled                      from '@emotion/styled'

import React                       from 'react'
import { forwardRef }              from 'react'

import { Arrow }                   from '@atls-ui-parts/tooltip'

import { ContainerInner }          from '../container-inner'
import { ContainerTitle }          from '../container-title'
import { ContainerElement }        from './container.element'
import { ContainerComponentProps } from './container.interfaces'
import { baseContainerStyles }     from './container.styles'

const StyledContainer = styled(ContainerElement)(baseContainerStyles)

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>(
  ({ content, showArrow, arrowOptions, arrowProps, layerSide, title, ...props }, ref) => (
    <StyledContainer ref={ref} {...props}>
      {title && <ContainerTitle>{title}</ContainerTitle>}
      {content && <ContainerInner>{content}</ContainerInner>}
      {showArrow && <Arrow {...layerSide} {...arrowOptions} {...arrowProps} />}
    </StyledContainer>
  )
)
