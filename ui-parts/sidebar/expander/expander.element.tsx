import React, { FunctionComponent, useMemo } from 'react'
import { motion }                            from 'framer-motion'

import { ExpanderElementProps }              from './expander.interfaces'
import { expanderMotionVariants }            from './expander.motion'

const ExpanderElement: FunctionComponent<ExpanderElementProps> = ({ opened, ...props }) => {
  const initial = useMemo(() => (opened ? 'visible' : 'hidden'), [opened])

  return <motion.div animate={opened ? 'visible' : 'hidden'} initial={initial} {...props} />
}

ExpanderElement.defaultProps = {
  variants: expanderMotionVariants,
}

export { ExpanderElement }
