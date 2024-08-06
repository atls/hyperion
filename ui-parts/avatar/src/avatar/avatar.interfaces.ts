import { AvatarProps as BaseAvatarProps } from '@radix-ui/react-avatar'
import { RecipeVariants }                 from '@vanilla-extract/recipes'

import { avatarStyles }                   from './avatar.css.js'

export type AvatarVariants = NonNullable<RecipeVariants<typeof avatarStyles>>

export interface AvatarProps extends BaseAvatarProps, AvatarVariants {}
