import type { HTMLAttributes }      from 'react'
import type { PropsWithChildren }   from 'react'
import type { ReactElement }        from 'react'
import type { ReactNode }           from 'react'

import { Children }                 from 'react'
import { clsx }                     from 'clsx'
import { cloneElement }             from 'react'
import React                        from 'react'

import { useParallax }              from '../context/index.js'
import { baseParallaxScreenStyles } from './parallax-screen.css.js'

const ParallaxScreenContent = ({ children }: PropsWithChildren): ReactNode => {
  const [, height] = useParallax()

  if (!height) return null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Children.map(children, (child) => cloneElement(child as ReactElement<any>, { height }))
}

export const ParallaxScreen = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(className, baseParallaxScreenStyles)} {...props}>
    <ParallaxScreenContent>{children}</ParallaxScreenContent>
  </div>
)
