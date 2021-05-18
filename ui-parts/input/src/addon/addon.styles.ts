import { styleFn }    from 'styled-system'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

export const createAddonPositionStyles: styleFn = () =>
  switchProp(prop('position', 'before'), () => ({
    before: {
      width: 'auto',
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderRightWidth: 0,
    },
    after: {
      width: 'auto',
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      borderLeftWidth: 0,
    },
  }))
