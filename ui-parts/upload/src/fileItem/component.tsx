import type { ReactNode }      from 'react'

import type { FileItemProps }  from './interfaces.js'

import { useId }               from 'react'

import { Button }              from '@atls-ui-parts/button'
import { TrashIcon }           from '@atls-ui-parts/icons'
import { LinearProgress }      from '@atls-ui-parts/progress'
import { useTheme }            from '@atls-ui-parts/theme'

import { ERROR_LABEL }         from './constants.js'
import { Container }           from './container/component.js'
import { Name }                from './name/component.js'
import { fileItemAppearances } from './styles/appearance/variants.js'
import { fileItemShapes }      from './styles/shape/variants.js'
import { statusStyles }        from './styles/status.css.js'
export const FileItem = ({
  name,
  state = 'uploaded',
  progress,
  shape,
  appearance = 'default',
  onRemove,
  removeAction,
  removeIcon = <TrashIcon />,
  removeLabel,
  progressIndicator,
  'aria-describedby': describedBy,
  ...props
}: FileItemProps): ReactNode => {
  const theme = useTheme()
  const statusId = useId()
  const errorDescription = state === 'error' ? statusId : undefined
  const resolvedShape = shape ?? fileItemShapes.default(theme)
  const colors =
    typeof appearance === 'string' ? fileItemAppearances[appearance](theme) : appearance
  const action =
    removeAction === undefined && state !== 'loading' && onRemove ? (
      <Button
        aria-label={removeLabel ?? `Remove ${name}`}
        aria-describedby={errorDescription}
        appearance={colors.remove[state]}
        shape={resolvedShape.remove}
        onClick={onRemove}
      >
        <span
          aria-hidden='true'
          style={{
            display: 'inline-flex',
            fontSize: resolvedShape.removeIconSize,
            width: resolvedShape.removeIconSize,
            height: resolvedShape.removeIconSize,
          }}
        >
          {removeIcon}
        </span>
      </Button>
    ) : (
      removeAction
    )
  let indicator: ReactNode = null
  if (state === 'loading')
    indicator =
      progressIndicator === undefined ? (
        <LinearProgress
          aria-label={`Uploading ${name}`}
          value={progress}
          shape={resolvedShape.progress}
          appearance={colors.progress}
        />
      ) : (
        progressIndicator
      )
  return (
    <Container
      {...props}
      aria-busy={state === 'loading'}
      aria-describedby={[describedBy, errorDescription].filter(Boolean).join(' ') || undefined}
      shape={resolvedShape.container}
      action={action}
      progress={indicator}
    >
      <Name text={name} shape={resolvedShape.name} appearance={colors.name[state]} />
      <span id={statusId} role='status' className={statusStyles}>
        {state === 'error' ? `${name}: ${ERROR_LABEL}` : null}
      </span>
    </Container>
  )
}
