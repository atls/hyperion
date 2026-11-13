import type { ReactNode }     from 'react'

import type { LabelShape }    from './styles/shape/interfaces.js'

import { useTheme }           from '@atls-ui-parts/theme'

import { labelStyles }        from './styles/base.css.js'
import { labelReserveStyles } from './styles/base.css.js'
import { labelValueStyles }   from './styles/base.css.js'

export const Label = ({
  value,
  color,
  shape,
}: {
  value?: number
  color: string
  shape: LabelShape
}): ReactNode => {
  const theme = useTheme()
  const typography =
    typeof shape.typography === 'function' ? shape.typography(theme) : shape.typography
  return (
    <span className={labelStyles} style={{ ...typography, color }}>
      <span aria-hidden='true' className={labelReserveStyles}>
        100%
      </span>
      <span className={labelValueStyles}>
        {value === undefined ? null : `${Math.round(value)}%`}
      </span>
    </span>
  )
}
