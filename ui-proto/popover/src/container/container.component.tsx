import styled                      from '@emotion/styled'

import React                       from 'react'
import { forwardRef }              from 'react'

import { Condition }               from '@atls-ui-parts/condition'
import { Arrow }                   from '@atls-ui-parts/tooltip'

import { ContainerInner }          from '../container-inner'
import { ContainerTitle }          from '../container-title'
import { ContainerElement }        from './container.element'
import { ContainerComponentProps } from './container.interfaces'
import { baseContainerStyles }     from './container.styles'

const StyledContainer = styled(ContainerElement)(baseContainerStyles)

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>((
  { content, showArrow, arrowOptions, arrowProps, layerSide, title, ...props },
  ref
) => (
  <StyledContainer ref={ref} {...props}>
    <Condition match={Boolean(title)}>
      <ContainerTitle>{title}</ContainerTitle>
    </Condition>
    <Condition match={Boolean(content)}>
      <ContainerInner>{content}</ContainerInner>
    </Condition>
    <Condition match={Boolean(showArrow)}>
      <Arrow {...layerSide} {...arrowOptions} {...arrowProps} />
    </Condition>
  </StyledContainer>
))
