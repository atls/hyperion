import type { ReactNode }      from 'react'

import type { ThumbProps }     from './thumb.interfaces.js'

import { clsx }                from 'clsx'
import { motion }              from 'framer-motion'
import { useMemo }             from 'react'
import React                   from 'react'

import { baseThumbStyles }     from './thumb.css.js'
import { disabledThumbStyles } from './thumb.css.js'
import { thumbSprinkles }      from './thumb.css.js'
import { thumbMotionVariants } from './thumb.motion.js'

export const Thumb = ({
  checked,
  disabled,
  variants = thumbMotionVariants,
  ...props
}: ThumbProps): ReactNode => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])

  const { className, style, otherProps } = thumbSprinkles(props)

  return (
    <motion.span
      initial={initial}
      animate={checked && !disabled ? 'checked' : 'visible'}
      variants={variants}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(
        baseThumbStyles,
        disabled ? disabledThumbStyles : '',
        String(otherProps?.className || ''),
        className
      )}
    />
  )
}
