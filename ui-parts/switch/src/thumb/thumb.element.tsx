import React                   from 'react'
import { FunctionComponent }   from 'react'
import { motion }              from 'framer-motion'
import { useMemo }             from 'react'

import { ThumbElementProps }   from './thumb.interfaces'
import { thumbMotionVariants } from './thumb.motion'

const ThumbElement: FunctionComponent<ThumbElementProps> = ({ checked, ...props }) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])

  return <motion.span initial={initial} animate={checked ? 'checked' : 'visible'} {...props} />
}

ThumbElement.defaultProps = {
  variants: thumbMotionVariants,
}

export { ThumbElement }
