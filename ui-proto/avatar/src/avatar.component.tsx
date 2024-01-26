import { Root }   from '@radix-ui/react-avatar'

import { styled } from '@atls-ui-proto/core'
import { theme }  from '@atls-ui-proto/core'

export const Avatar = styled(Root, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  boxSizing: 'border-box',
  userSelect: 'none',
  backgroundColor: theme.colors.black,

  variants: {
    shape: {
      circle: {
        borderRadius: '100%',
      },
      square: {
        borderRadius: 4,
      },
    },
    size: {
      small: {
        width: 40,
        height: 40,
      },
      normal: {
        width: 48,
        height: 48,
      },
      large: {
        height: 56,
        width: 56,
      },
    },
  },

  defaultVariants: {
    shape: 'circle',
    size: 'normal',
  },
})
