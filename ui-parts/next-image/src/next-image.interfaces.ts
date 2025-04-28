import type { ImageProps } from 'next/image.js'
import type { Ref }        from 'react'

export interface NextImageProps extends ImageProps {
  wrapperClassName?: string
  ref?: Ref<HTMLImageElement>
}
