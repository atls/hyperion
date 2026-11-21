import type { AvatarImageProps }     from '@radix-ui/react-avatar'
import type { ButtonHTMLAttributes } from 'react'
import type { ReactNode }            from 'react'

import type { BoxProps }             from './box/interfaces.js'
import type { AvatarAppearance }     from './styles/appearance/interfaces.js'
import type { AvatarShape }          from './styles/shape/interfaces.js'
import type { avatarAppearances }    from './styles/appearance/variants.js'
export interface AvatarProps extends Omit<BoxProps, 'appearance' | 'children' | 'shape'> {
  alt: string
  src?: string
  fallback?: string
  loading?: boolean
  loader?: ReactNode
  buttonProps?: Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'dangerouslySetInnerHTML' | 'disabled' | 'type'
  >
  shape?: AvatarShape
  appearance?: AvatarAppearance | keyof typeof avatarAppearances
  imageProps?: Omit<AvatarImageProps, 'alt' | 'asChild' | 'children' | 'src'>
}
