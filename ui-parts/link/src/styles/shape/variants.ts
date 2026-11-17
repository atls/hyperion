import type { LinkShape }  from './interfaces.js'

import { containerShapes } from '../../container/styles/shape/variants.js'
import { iconShapes }      from '../../icon/styles/shape/variants.js'
import { textShapes }      from '../../text/styles/shape/variants.js'
export const linkShapes = {
  standalone: {
    container: containerShapes.standalone,
    text: textShapes.default,
    icon: iconShapes.default,
  },
  inline: { container: containerShapes.inline, text: textShapes.default, icon: iconShapes.default },
} satisfies Record<string, LinkShape>
