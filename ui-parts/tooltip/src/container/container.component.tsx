import type { ReactNode }               from 'react'

import type { ContainerComponentProps } from './container.interfaces.js'

import { Arrow }                        from 'react-laag'
import { motion }                       from 'framer-motion'
import React                            from 'react'

import { Condition }                    from '@atls-ui-parts/condition'

import { animateProps }                 from './container.contants.js'
import { baseContainerStyles }          from './container.css.js'

export const Container = ({
  text,
  showArrow,
  arrowOptions,
  arrowProps,
  layerSide,
  animate = false,
  style,
  ref,
}: ContainerComponentProps): ReactNode => (
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
)
