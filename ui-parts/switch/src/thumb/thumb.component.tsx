import React                   from 'react'
import { clsx }                from 'clsx'
import { motion }              from 'framer-motion'
import { useMemo }             from 'react'

import { ThumbElementProps }   from './thumb.interfaces.js'
import { ThumbSprinkles }      from './thumb.styles.css.js'
import { thumbMotionVariants } from './thumb.motion.js'
import { baseThumbStyles }     from './thumb.styles.css.js'
import { disabledThumbStyles } from './thumb.styles.css.js'
import { thumbSprinkles }      from './thumb.styles.css.js'

export const Thumb: React.FC<ThumbElementProps & ThumbSprinkles> = ({
  checked,
  disabled,
  ...props
}) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])
  const { className, style, otherProps } = thumbSprinkles(props)

  return (
    <motion.span
      initial={initial}
      animate={checked && !disabled ? 'checked' : 'visible'}
      {...otherProps}
      className={clsx(
        baseThumbStyles,
        disabled ? disabledThumbStyles : '',
        otherProps?.className,
        className
      )}
      style={{ ...style, ...otherProps?.style }}
    />
  )
}

Thumb.defaultProps = {
  variants: thumbMotionVariants,
}
