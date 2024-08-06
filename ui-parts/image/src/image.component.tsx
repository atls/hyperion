import React                 from 'react'
import { PropsWithChildren } from 'react'
import { ImgHTMLAttributes } from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { baseImageStyles }   from './image.styles.css.js'
import { imageSprinkles }    from './image.styles.css.js'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = forwardRef<HTMLImageElement, PropsWithChildren<ImageProps>>((
  { alt, className, width, height, ...props },
  ref
) => {
  const { style, otherProps } = imageSprinkles({
    ...props,
    width,
    height,
  })

  return (
    <img
      ref={ref}
      className={clsx(baseImageStyles, className)}
      alt={alt}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      width={width}
      height={height}
    />
  )
})
