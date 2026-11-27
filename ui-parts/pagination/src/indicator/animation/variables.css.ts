import { createVar } from '@vanilla-extract/css'

import { radii }     from '@atls-ui/theme/tokens'

export const paginationAnimationVariables = {
  distance: createVar(),
  direction: createVar(),
  borderWidth: createVar(),
  radius: createVar({ syntax: '<length-percentage>', inherits: true, initialValue: radii.full }),
}

export const borderShapeOpacity = createVar()
