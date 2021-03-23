import { layout }   from 'styled-system'
import { ifProp }   from 'styled-tools'

import styled       from '@emotion/styled'
import { Text }     from '@atlantis-lab/text'
import { useTheme } from '@emotion/react'

export const LinkUI = styled<any>(Text.withComponent('a'))(
  {
    position: 'relative',
    textDecoration: 'none',
    display: 'inline-flex',
    transition: '0.35s',
    cursor: 'pointer',
    '::after': {
      transition: '0.35s',
      content: '""',
      height: '1px',
      width: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: '-3px',
      left: '0px',
    },
  },
  ifProp('underline', ({ underlineColor }) => {
    const theme: any = useTheme()

    return {
      position: 'relative',
      '::after': {
        transition: '0.35s',
        content: '""',
        height: '1px',
        width: '100%',
        backgroundColor: theme.colors[underlineColor] || theme.colors.lightBlue,
        position: 'absolute',
        bottom: '-3px',
        left: '0px',
      },
    }
  }),
  layout,
)
