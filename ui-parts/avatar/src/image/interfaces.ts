import type { AvatarImageProps } from '@radix-ui/react-avatar'

import type { ImageShape }       from './styles/shape/interfaces.js'
export interface ImageProps extends Omit<AvatarImageProps, 'shape'> {
  shape: ImageShape
}
