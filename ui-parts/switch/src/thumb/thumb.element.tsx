import React, { FunctionComponent, useMemo } from 'react'
import { motion }                            from 'framer-motion'

import { ThumbElementProps }                 from './thumb.interfaces'
import { thumbMotionVariants }               from './thumb.motion'

const ThumbElement: FunctionComponent<ThumbElementProps> = ({ checked, ...props }) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])

  return <motion.span initial={initial} animate={checked ? 'checked' : 'visible'} {...props} />
}

ThumbElement.defaultProps = {
  variants: thumbMotionVariants,
}

export { ThumbElement }
