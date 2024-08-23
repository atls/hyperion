import React                 from 'react'
import { PropsWithChildren } from 'react'
import { ImgHTMLAttributes } from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { baseImageStyles }   from './image.css.js'
import { imageSprinkles }    from './image.css.js'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = forwardRef<HTMLImageElement, PropsWithChildren<ImageProps>>((
  { alt, width, height, ...props },
  ref
) => {
  const { className, style, otherProps } = imageSprinkles({ ...props, width, height })

  return (
    <img
      ref={ref}
      className={clsx(baseImageStyles, className, otherProps?.className)}
      alt={alt}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      width={width}
      height={height}
    />
  )
})
