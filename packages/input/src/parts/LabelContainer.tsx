import React     from 'react'
import styled    from '@emotion/styled'

import { Label } from './Label'

const Container = styled.div({
  display: 'flex',
  position: 'relative',
  width: '100%',
})

export const LabelContainer = ({
  labelText,
  labelColor,
  labelFontSize,
  labelFontWeight,
  labelTop,
  labelLeft,
  children,
}: any) => {
  return (
    <Container>
      {labelText && (
        <Label
          color={labelColor}
          fontSize={labelFontSize}
          fontWeight={labelFontWeight}
          top={labelTop}
          left={labelLeft}
        >
          {labelText}
        </Label>
      )}
      {children}
    </Container>
  )
}
