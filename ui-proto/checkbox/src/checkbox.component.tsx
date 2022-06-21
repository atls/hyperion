import styled                      from '@emotion/styled'

import React                       from 'react'
import { useMemo }                 from 'react'
import { forwardRef }              from 'react'
import { styleFn }                 from 'styled-system'
import { ifProp }                  from 'styled-tools'

import { ConditionalRender }       from '@atls-ui-parts/conditional-render'
import { HiddenInput }             from '@atls-ui-parts/hidden-input'

import { boxBaseStyles }           from './checkbox.styles'
import { boxShapeStyles }          from './checkbox.styles'
import { boxAppearanceStyles }     from './checkbox.styles'
import { checkAppearanceStyles }   from './checkbox.styles'
import { checkShapeStyles }        from './checkbox.styles'
import { checkBaseStyles }         from './checkbox.styles'
import { labelAppearanceStyles }   from './checkbox.styles'
import { labelShapeStyles }        from './checkbox.styles'
import { labelPositionStyles }     from './checkbox.styles'
import { containerPositionStyles } from './checkbox.styles'
import { containerBaseStyles }     from './checkbox.styles'

const CheckboxWithoutRef = (
  { onCheck, children, active, labelPosition = 'end', ...props },
  ref
) => {
  const createCheckCheckedStyles = (): styleFn =>
    ifProp(
      'active',
      {
        display: 'block',
      },
      { display: 'none' }
    )

  const Box = useMemo(() => styled.div(boxBaseStyles, boxShapeStyles, boxAppearanceStyles), [])

  const Check = useMemo(
    () =>
      styled.div(
        checkBaseStyles,
        checkShapeStyles,
        checkAppearanceStyles,
        createCheckCheckedStyles()
      ),
    []
  )

  const Label = useMemo(
    () => styled(ConditionalRender())(labelPositionStyles, labelShapeStyles, labelAppearanceStyles),
    []
  )

  const Container = useMemo(() => styled.div(containerBaseStyles, containerPositionStyles), [])

  return (
    <Container labelPosition={labelPosition} onClick={() => onCheck(!active)} {...props}>
      <HiddenInput
        type='checkbox'
        checked={active}
        onChange={(event) => onCheck(event.currentTarget.checked)}
      />
      <Box checked={active} {...props}>
        <Check active={active}>svg</Check>
      </Box>
      <Label position={labelPosition}>{children}</Label>
    </Container>
  )
}

const Checkbox = forwardRef(CheckboxWithoutRef)

export { Checkbox }
