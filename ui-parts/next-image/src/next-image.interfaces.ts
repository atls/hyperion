import type { ImageProps } from 'next/image.js'

export interface NextImageProps extends ImageProps {
  wrapperClassName?: string
}
