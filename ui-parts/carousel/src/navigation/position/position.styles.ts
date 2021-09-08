import { styleFn }          from 'styled-system'
import { ifProp }           from 'styled-tools'

import { execAndSerialize } from '@atls-ui-parts/styles'
import { combine }          from '@atls-ui-parts/styles'

export const createShowStyles: styleFn = () =>
  ifProp(
    'show',
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    {
      display: 'none',
    }
  )

export const createNavigationPositionStyles = (): styleFn =>
  execAndSerialize(combine(createShowStyles()))
