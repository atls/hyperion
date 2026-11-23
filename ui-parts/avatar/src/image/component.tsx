import type { ImageProps }      from './interfaces.js'

import { Image as NativeImage } from '@radix-ui/react-avatar'
import { clsx }                 from 'clsx'

import { imageStyles }          from './styles.css.js'
export const Image = ({ shape, className, style, ...props }: ImageProps) => (
  <NativeImage {...props} className={clsx(imageStyles, className)} style={{ ...shape, ...style }} />
)
