import React                        from 'react'
import { Children }                 from 'react'
import { HTMLAttributes }           from 'react'
import { FC }                       from 'react'
import { clsx }                     from 'clsx'
import { cloneElement }             from 'react'

import { useParallax }              from '../context/index.js'
import { baseParallaxScreenStyles } from './parallax-screen.css.js'

const ParallaxScreenContent = ({ children }: any) => {
  const [, height] = useParallax()

  if (!height) return null

  return Children.map(children, (child) => cloneElement(child, { height }))
}

export const ParallaxScreen: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={clsx(className, baseParallaxScreenStyles)} {...props}>
    <ParallaxScreenContent>{children}</ParallaxScreenContent>
  </div>
)
