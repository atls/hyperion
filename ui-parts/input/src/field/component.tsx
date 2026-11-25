import type { ReactNode }          from 'react'

import type { InputFieldProps }    from './interfaces.js'

import { assignInlineVars }        from '@vanilla-extract/dynamic'
import { clsx }                    from 'clsx'
import { cloneElement }            from 'react'

import { inputAnimationVariables } from '../animation/styles.css.js'
import { inputAnimations }         from '../animation/variants.js'
import { appearanceStyles }        from '../styles/appearance/styles.css.js'
import { fieldStyles }             from '../styles/layout/container.css.js'
import { assignInputVariables }    from '../styles/variables.js'
import { resolveFieldShape }       from './styles/shape/resolve.js'
import { fieldShapeStyles }        from './styles/shape/styles.css.js'
export const InputField = ({
  children,
  appearance,
  shape,
  disabled,
  error,
  filled,
  animation = inputAnimations.default,
}: InputFieldProps): ReactNode =>
  cloneElement(children, {
    className: clsx(fieldStyles, appearanceStyles, fieldShapeStyles, children.props.className),
    'data-disabled': disabled || undefined,
    'data-error': error || undefined,
    'data-filled': filled,
    style: {
      ...assignInputVariables(appearance),
      ...assignInlineVars(inputAnimationVariables, animation),
      ...resolveFieldShape(shape),
      ...children.props.style,
    },
  })
