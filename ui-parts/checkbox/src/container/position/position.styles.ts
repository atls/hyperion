import { styleFn }    from 'styled-system'
import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const createContainerPositionStyles = (): styleFn =>
  switchProp(prop('labelPosition', 'end'), () => ({
    start: {
      flexDirection: 'row-reverse',
    },
    top: {
      flexDirection: 'column-reverse',
    },
    end: {
      flexDirection: 'row',
    },
    bottom: {
      flexDirection: 'column',
    },
  }))
