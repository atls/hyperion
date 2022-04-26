import styled                       from '@emotion/styled'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'

import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import { InputProps }               from './input.interfaces'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'

export const InputElement = styled.div(baseStyles, shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, disabled, onChange, onChangeNative, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  return (
    <InputElement {...props} size={size}>
      <RawInput ref={ref} {...props} disabled={disabled} value={value} onChange={changeValue} />
    </InputElement>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
