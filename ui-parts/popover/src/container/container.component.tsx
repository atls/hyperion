import type { ContainerComponentProps } from './container.interfaces.js'

import { Arrow }                        from 'react-laag'
import { motion }                       from 'framer-motion'
import { forwardRef }                   from 'react'
import React                            from 'react'

import { Condition }                    from '@atls-ui-parts/condition'

import { ContainerInner }               from '../container-inner/index.js'
import { ContainerTitle }               from '../container-title/index.js'
import { animateProps }                 from './container.contants.js'
import { containerStyles }              from './container.css.js'

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>((
  { title, content, showArrow, arrowOptions, arrowProps, layerSide, animate, style },
  ref
) => (
  <motion.div
    ref={ref}
    className={containerStyles}
    {...(animate ? animateProps : {})}
    transition={{ type: 'spring', damping: 30, stiffness: 500 }}
    style={style}
  >
    <Condition match={Boolean(title)}>
      <ContainerTitle>{title}</ContainerTitle>
    </Condition>
    <Condition match={Boolean(content)}>
      <ContainerInner>{content}</ContainerInner>
    </Condition>
    <Condition match={Boolean(showArrow)}>
      <Arrow layerSide={layerSide} {...arrowOptions} {...arrowProps} />
    </Condition>
  </motion.div>
))
