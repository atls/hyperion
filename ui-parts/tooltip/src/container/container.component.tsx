import React                       from 'react'
import { Arrow }                   from 'react-laag'
import { motion }                  from 'framer-motion'
import { forwardRef }              from 'react'

import { Condition }               from '@atls-ui-parts/condition'

import { ContainerComponentProps } from './container.interfaces.js'
import { baseContainerStyles }     from './container.css.js'

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>((
  { text, showArrow, arrowOptions, arrowProps, layerSide, animate, style },
  ref
) => (
  <motion.div
    ref={ref}
    className={baseContainerStyles}
    initial={animate ? { opacity: 0, scale: 0.8 } : {}}
    animate={animate ? { opacity: 1, scale: 1, y: 0 } : {}}
    exit={animate ? { opacity: 0, scale: 0.8 } : {}}
    transition={{ type: 'spring', damping: 30, stiffness: 500 }}
    style={style}
  >
    {text}
    <Condition match={Boolean(showArrow)}>
      <Arrow layerSide={layerSide} {...arrowOptions} {...arrowProps} />
    </Condition>
  </motion.div>
))
