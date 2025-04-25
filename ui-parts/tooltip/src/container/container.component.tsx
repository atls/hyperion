import type { ContainerComponentProps } from './container.interfaces.js'

import { Arrow }                        from 'react-laag'
import { motion }                       from 'framer-motion'
import { forwardRef }                   from 'react'
import React                            from 'react'

import { Condition }                    from '@atls-ui-parts/condition'

import { animateProps }                 from './container.contants.js'
import { baseContainerStyles }          from './container.css.js'

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>((
  { text, showArrow, arrowOptions, arrowProps, layerSide, animate = false, style },
  ref
) => (
  <motion.div
    ref={ref}
    className={baseContainerStyles}
    {...(animate ? animateProps : {})}
    style={style}
  >
    {text}
    <Condition match={Boolean(showArrow)}>
      <Arrow
        layerSide={layerSide}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        {...arrowOptions}
        {...arrowProps}
      />
    </Condition>
  </motion.div>
))
