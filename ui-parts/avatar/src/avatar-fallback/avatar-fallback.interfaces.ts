import type { AvatarFallbackProps }  from '@radix-ui/react-avatar'
import type { RecipeVariants }       from '@vanilla-extract/recipes'

import type { avatarFallbackStyles } from './avatar-fallback.css.js'

export type AvatarFallbackVariants = NonNullable<RecipeVariants<typeof avatarFallbackStyles>>

export interface FallbackProps extends AvatarFallbackProps, AvatarFallbackVariants {}
