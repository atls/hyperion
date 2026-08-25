import type { ReactNode }    from 'react'

import type { ButtonProps }  from '../button.interfaces.js'

import { Button }            from '../button.component.js'
import { buttonAppearances } from '../styles/appearance.js'
import { buttonShapes }      from '../styles/shape.js'

export const GhostButton = ({
  appearance = buttonAppearances.ghost,
  shape = buttonShapes.md,
  ...props
}: ButtonProps): ReactNode => <Button appearance={appearance} shape={shape} {...props} />
