import type { ReactNode }    from 'react'

import type { ButtonProps }  from '../button.interfaces.js'

import { Button }            from '../button.component.js'
import { buttonAppearances } from '../styles/appearance.css.js'
import { buttonShapes }      from '../styles/shape.css.js'

/**
 * @deprecated Use Button with buttonAppearances.ghost and buttonShapes.ghost instead.
 */
export const GhostButton = ({
  appearance = buttonAppearances.ghost,
  shape = buttonShapes.ghost,
  ...props
}: ButtonProps): ReactNode => <Button appearance={appearance} shape={shape} {...props} />
