import type { ReactNode }         from 'react'

import type { TriggerProps }      from './interfaces.js'

import { clsx }                   from 'clsx'

import { InputField }             from '@atls-ui-parts/input'
import { inputAnimations }        from '@atls-ui-parts/input'

import { resolveFieldAppearance } from './styles/appearance/field.js'
import { triggerBaseStyles }      from './styles/base.css.js'
export const Trigger = ({
  shape,
  appearance,
  className,
  disabled,
  ...props
}: TriggerProps): ReactNode => (
  <InputField
    shape={shape}
    appearance={resolveFieldAppearance(appearance)}
    disabled={disabled}
    filled
    animation={inputAnimations.none}
  >
    <button
      {...props}
      type='button'
      disabled={disabled}
      className={clsx(triggerBaseStyles, className)}
    />
  </InputField>
)
