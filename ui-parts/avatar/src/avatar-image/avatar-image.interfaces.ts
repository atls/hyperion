import type { AvatarImageProps } from '@radix-ui/react-avatar'
import type { Ref }              from 'react'

export interface ImageProps extends AvatarImageProps {
  ref?: Ref<HTMLImageElement>
}
