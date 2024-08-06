import { AvatarFallbackProps }  from '@radix-ui/react-avatar'
import { RecipeVariants }       from '@vanilla-extract/recipes'

import { avatarFallbackStyles } from './avatar-fallback.css.js'

export type AvatarFallbackVariants = NonNullable<RecipeVariants<typeof avatarFallbackStyles>>

export interface FallbackProps extends AvatarFallbackProps, AvatarFallbackVariants {}
