import { Fallback } from '@radix-ui/react-avatar'

import { styled }   from '@atls-ui-proto/core'
import { theme }    from '@atls-ui-proto/core'

export const AvatarFallback = styled(Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.fonts.primary,
  color: theme.colors.white,

  variants: {
    size: {
      small: {
        fontWeight: theme.fontWeights.bold,
        fontSize: 18,
      },
      normal: {
        fontWeight: theme.fontWeights.bold,
        fontSize: 20,
      },
      large: {
        fontWeight: theme.fontWeights.bold,
        fontSize: 22,
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
})
