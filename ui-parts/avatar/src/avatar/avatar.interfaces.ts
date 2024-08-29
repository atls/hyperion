import type { AvatarProps as BaseAvatarProps } from '@radix-ui/react-avatar'
import type { RecipeVariants }                 from '@vanilla-extract/recipes'

import type { avatarStyles }                   from './avatar.css.js'

export type AvatarVariants = NonNullable<RecipeVariants<typeof avatarStyles>>

export interface AvatarProps extends BaseAvatarProps, AvatarVariants {}
