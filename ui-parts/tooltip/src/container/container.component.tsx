import styled                      from '@emotion/styled'

import React                       from 'react'
import { Arrow }                   from 'react-laag'
import { forwardRef }              from 'react'

import { Condition }               from '@atls-ui-parts/condition'

import { ContainerElement }        from './container.element'
import { ContainerComponentProps } from './container.interfaces'
import { baseContainerStyles }     from './container.styles'

const StyledContainer = styled(ContainerElement)(baseContainerStyles)

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>((
  { text, showArrow, arrowOptions, arrowProps, layerSide, ...props },
  ref
) => (
  <StyledContainer ref={ref} {...props}>
    {text}
    <Condition match={Boolean(showArrow)}>
      <Arrow {...layerSide} {...arrowOptions} {...arrowProps} />
    </Condition>
  </StyledContainer>
))
