import type { IconProps }          from './interfaces.js'

import { assignInlineVars }        from '@vanilla-extract/dynamic'
import { clsx }                    from 'clsx'

import { linkAnimationStyles }     from '../styles/animation.css.js'
import { iconAppearanceStyles }    from './styles/appearance/styles.css.js'
import { iconAppearanceVariables } from './styles/appearance/styles.css.js'
export const Icon = ({ children, shape, appearance }: IconProps) => (
  <span
    aria-hidden='true'
    className={clsx(iconAppearanceStyles, linkAnimationStyles)}
    style={{ ...assignInlineVars(iconAppearanceVariables, appearance), fontSize: shape.size }}
  >
    {children}
  </span>
)
