import React                      from 'react'
import { FunctionComponent }      from 'react'
import { motion }                 from 'framer-motion'
import { useMemo }                from 'react'

import { expanderMotionVariants } from './expander.motion'
import { ExpanderElementProps }   from './expander.interfaces'

const ExpanderElement: FunctionComponent<ExpanderElementProps> = ({ opened, ...props }) => {
  const initial = useMemo(() => (opened ? 'visible' : 'hidden'), [opened])

  return <motion.div animate={opened ? 'visible' : 'hidden'} initial={initial} {...props} />
}

ExpanderElement.defaultProps = {
  variants: expanderMotionVariants,
}

export { ExpanderElement }
