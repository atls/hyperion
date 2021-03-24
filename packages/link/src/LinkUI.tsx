import { layout }    from 'styled-system'
import { ifProp }    from 'styled-tools'

import styled        from '@emotion/styled'
import { Text }      from '@atlantis-lab/text'
import { withTheme } from '@emotion/react'

export const LinkUI = styled<any>(Text.withComponent('a'))(
  {
    position: 'relative',
    textDecoration: 'none',
    display: 'inline-flex',
    transition: '0.35s',
    cursor: 'pointer',
  },
  ifProp('underline', ({ theme, textDecorationStyle, textDecorationColor }) => ({
    textDecoration: 'underline',
    textDecorationStyle,
    textDecorationColor: theme.colors[textDecorationColor],
  })),
  layout,
)

export default withTheme(LinkUI)
