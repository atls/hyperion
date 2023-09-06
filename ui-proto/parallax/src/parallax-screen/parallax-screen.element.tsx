import styled           from '@emotion/styled'

import React            from 'react'
import { Children }     from 'react'
import { cloneElement } from 'react'

import { useParallax }  from '../context'

const ParallaxScreenContent = ({ children }: any) => {
  const [, height] = useParallax()

  if (!height) return null

  return Children.map(children, (child) => cloneElement(child, { height }))
}

const ParallaxScreenRenderer = ({ children, className }) => (
  <div className={className}>
    <ParallaxScreenContent>{children}</ParallaxScreenContent>
  </div>
)

const ParallaxScreenElement: any = styled(ParallaxScreenRenderer)()

export { ParallaxScreenElement }
