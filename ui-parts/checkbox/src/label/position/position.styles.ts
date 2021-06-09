import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'

import { LabelPositionStyles } from './position.interfaces'

export const createLabelPositionStyles = ({ margin }: LabelPositionStyles): styleFn =>
  switchProp(prop('position', 'end'), () => ({
    start: {
      marginRight: margin,
    },
    end: {
      marginLeft: margin,
    },
    top: {
      marginBottom: margin,
    },
    bottom: {
      marginTop: margin,
    },
  }))
