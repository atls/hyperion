import styled                  from '@emotion/styled'

import React                   from 'react'
import { useInView }           from 'react-intersection-observer'

import { InViewBoxElement }    from './in-view-box.element'
import { baseInViewBoxStyles } from './in-view-box.styles'

const BaseInViewBox = styled(InViewBoxElement)(baseInViewBoxStyles)

export const InViewBox = ({ children, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  })

  return (
    <BaseInViewBox ref={ref} {...props}>
      {inView && children}
    </BaseInViewBox>
  )
}
