import { FormEvent }          from 'react'
import { ChangeEventHandler } from 'react'
import { FormEventHandler }   from 'react'
import { useCallback }        from 'react'

import { OnChangeCallback }   from './value.interfaces'

export const useChangeValue = (
  disabled?: boolean,
  onChange?: OnChangeCallback,
  onChangeNative?: FormEventHandler<HTMLInputElement>
): ChangeEventHandler<HTMLInputElement> =>
  useCallback(
    (event: FormEvent<HTMLInputElement>): void => {
      if (!disabled) {
        if (onChange) {
          onChange(event.currentTarget.value)
        }

        if (onChangeNative) {
          onChangeNative(event)
        }
      }
    },
    [disabled, onChange, onChangeNative]
  )
