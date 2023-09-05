import styled         from '@emotion/styled'

import { color }      from 'styled-system'
import { layout }     from 'styled-system'
import { space }      from 'styled-system'
import { system }     from 'styled-system'
import { typography } from 'styled-system'

import { TextProps }  from './text.interfaces'

const Text = styled.span<TextProps>(
  system({
    wordBreak: true,
    textTransform: true,
    whiteSpace: true,
    textOverflow: true,
    cursor: true,
  }),
  color,
  space,
  typography,
  layout
)

Text.defaultProps = {
  fontWeight: 'normal',
  fontFamily: 'primary',
  fontSize: 'normal',
  color: 'text.primary',
  lineHeight: 'normal',
  display: 'inline-flex',
}

export { Text }
