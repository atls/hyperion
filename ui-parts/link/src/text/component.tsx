import type { TextProps }          from './interfaces.js'

import { assignInlineVars }        from '@vanilla-extract/dynamic'
import { clsx }                    from 'clsx'

import { linkAnimationStyles }     from '../styles/animation.css.js'
import { textAppearanceStyles }    from './styles/appearance/styles.css.js'
import { textAppearanceVariables } from './styles/appearance/styles.css.js'
export const Text = ({ children, shape, appearance }: TextProps) => (
  <span
    className={clsx(textAppearanceStyles, linkAnimationStyles)}
    style={{ ...assignInlineVars(textAppearanceVariables, appearance), ...shape.typography }}
  >
    {children}
  </span>
)
