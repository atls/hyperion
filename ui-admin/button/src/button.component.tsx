import type { ButtonProps }     from '@atls-ui-parts/button'
import type { ReactNode }       from 'react'

import { Button as RootButton } from '@atls-ui-parts/button'

import { buttonAppearances }    from './styles/appearance.css.js'
import { buttonShapes }         from './styles/shape.css.js'

export const Button = ({
  appearance = buttonAppearances.blue,
  shape = buttonShapes.huge,
  ...props
}: ButtonProps): ReactNode => <RootButton appearance={appearance} shape={shape} {...props} />
