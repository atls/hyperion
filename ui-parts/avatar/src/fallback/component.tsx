import type { FallbackProps }          from './interfaces.js'

import { Fallback as NativeFallback }  from '@radix-ui/react-avatar'
import { assignInlineVars }            from '@vanilla-extract/dynamic'
import { clsx }                        from 'clsx'

import { avatarAnimationStyles }       from '../styles/animation.css.js'
import { fallbackAppearanceStyles }    from './styles/appearance/styles.css.js'
import { fallbackAppearanceVariables } from './styles/appearance/styles.css.js'
import { fallbackBaseStyles }          from './styles/base.css.js'
export const Fallback = ({ text, shape, appearance }: FallbackProps) => (
  <NativeFallback
    className={clsx(fallbackBaseStyles, fallbackAppearanceStyles, avatarAnimationStyles)}
    style={{ ...assignInlineVars(fallbackAppearanceVariables, appearance), ...shape.typography }}
  >
    {text}
  </NativeFallback>
)
