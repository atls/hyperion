import type { ReactNode }      from 'react'

import type { ActionsProps }   from './interfaces.js'

import { Children }            from 'react'

import { Button }              from '@atls-ui-parts/button'
import { buttonAppearances }   from '@atls-ui-parts/button'

import { actionsStyles }       from './styles/base.css.js'
import { defaultActionStyles } from './styles/base.css.js'

export const Actions = ({
  shape,
  confirmAction,
  cancelAction,
  onConfirm,
  onCancel,
}: ActionsProps): ReactNode => {
  const actions = Children.toArray([
    confirmAction === undefined ? (
      <Button
        key='confirm'
        fullWidth
        className={defaultActionStyles}
        appearance={buttonAppearances.primary}
        shape={shape.button}
        onClick={onConfirm}
      >
        Ok
      </Button>
    ) : (
      confirmAction
    ),
    cancelAction === undefined ? (
      <Button
        key='cancel'
        fullWidth
        className={defaultActionStyles}
        appearance={buttonAppearances.secondary}
        shape={shape.button}
        onClick={onCancel}
      >
        Cancel
      </Button>
    ) : (
      cancelAction
    ),
  ])
  return actions.length ? (
    <div className={actionsStyles} style={{ gap: shape.gap }}>
      {actions}
    </div>
  ) : null
}
