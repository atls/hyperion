import type { HTMLAttributes }      from 'react'
import type { PropsWithChildren }   from 'react'
import type { ReactElement }        from 'react'
import type { FC }                  from 'react'

import { Children }                 from 'react'
import { clsx }                     from 'clsx'
import { cloneElement }             from 'react'
import React                        from 'react'

import { useParallax }              from '../context/index.js'
import { baseParallaxScreenStyles } from './parallax-screen.css.js'

const ParallaxScreenContent: FC<PropsWithChildren> = ({ children }) => {
  const [, height] = useParallax()

  if (!height) return null

  return Children.map(children, (child) => cloneElement(child as ReactElement, { height }))
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
