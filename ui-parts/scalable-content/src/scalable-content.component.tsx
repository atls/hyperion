import React                    from 'react'
import { FC }                   from 'react'

import { ScalableContentProps } from './scalable-content.interfaces'
import { Scalable }             from './scalable.component'
import { useScale }             from './use-scale.hook'

export const ScalableContent: FC<ScalableContentProps> = (props) => {
  const { ref, style } = useScale()

  return <Scalable ref={ref} style={style} {...props} />
}
