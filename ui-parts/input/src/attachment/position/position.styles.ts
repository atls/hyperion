import { styleFn }    from 'styled-system'
import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const createAttachmentPositionStyles: styleFn = (offsetLeft: number, offsetRight: number) =>
  switchProp(prop('type', 'prefix'), () => ({
    prefix: {
      paddingRight: offsetLeft,
    },
    suffix: {
      paddingLeft: offsetRight,
    },
  }))
