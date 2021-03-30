import React           from 'react'
import { boxShadow }   from 'styled-system'

import styled          from '@emotion/styled'

import { StyledInput } from './parts'

const Input = (props) => (
  <StyledInput
    {...props}
    onChange={({ target }) => props.onChange && props.onChange(target.value)}
  />
)

const Textarea = styled(Input)(
  () => ({
    padding: '17px 20px',
    resize: 'none',
    height: 'auto',
  }),
  boxShadow,
)

Textarea.defaultProps = {
  ...StyledInput.defaultProps,
  as: 'textarea',
  size: 'normal',
}

export { Textarea }
