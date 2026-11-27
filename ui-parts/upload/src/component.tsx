'use client'

import type { ReactNode }         from 'react'

import type { UploadProps }       from './interfaces.js'
import type { UploadVisualState } from './states.js'

import { useId }                  from 'react'

import { CloudUploadIcon }        from '@atls-ui-parts/icons'
import { LinearProgress }         from '@atls-ui-parts/progress'
import { useTheme }               from '@atls-ui-parts/theme'

import { Box }                    from './box/component.js'
import { DEFAULT_LABEL }          from './constants.js'
import { LOADING_LABEL }          from './constants.js'
import { ERROR_LABEL }            from './constants.js'
import { Container }              from './container/component.js'
import { Icon }                   from './icon/component.js'
import { Input }                  from './input/component.js'
import { Label }                  from './label/component.js'
import { uploadAppearances }      from './styles/appearance/variants.js'
import { uploadShapes }           from './styles/shape/variants.js'
import { useUpload }              from './useUpload.js'
export const Upload = ({
  state = 'default',
  shape,
  appearance = 'default',
  label,
  icon = <CloudUploadIcon />,
  progress,
  progressIndicator,
  inputProps,
  accept,
  multiple,
  minSize,
  maxSize,
  maxFiles,
  validator,
  disabled,
  onSelect,
  onReject,
  onFileDialogCancel,
  children,
  ...props
}: UploadProps): ReactNode => {
  const theme = useTheme()
  const resolvedShape = shape ?? uploadShapes.default(theme)
  const colors = typeof appearance === 'string' ? uploadAppearances[appearance](theme) : appearance
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useUpload({
    state,
    accept,
    multiple,
    minSize,
    maxSize,
    maxFiles,
    validator,
    disabled,
    onSelect,
    onReject,
    onFileDialogCancel,
  })
  const labelId = useId()
  let visualState: UploadVisualState = state
  if (state === 'default' && isDragActive) visualState = isDragReject ? 'error' : 'hover'
  const hoverState = visualState === 'default' ? 'hover' : visualState
  const inactive = disabled || state === 'loading'
  const labels = { default: DEFAULT_LABEL, loading: LOADING_LABEL, error: ERROR_LABEL }
  const text = label ?? labels[visualState === 'hover' ? 'default' : visualState]
  let leading: ReactNode = null
  if (icon != null)
    leading = (
      <Icon
        shape={resolvedShape.icon}
        appearance={colors.icon[visualState]}
        hoverAppearance={colors.icon[hoverState]}
      >
        {icon}
      </Icon>
    )
  if (state === 'loading')
    leading =
      progressIndicator === undefined ? (
        <LinearProgress
          aria-label='Upload progress'
          value={progress}
          shape={resolvedShape.progress}
          appearance={colors.progress}
        />
      ) : (
        progressIndicator
      )
  return (
    <Container {...props} shape={resolvedShape.container} files={children}>
      <Box
        {...getRootProps({
          role: 'button',
          'aria-labelledby': labelId,
          'aria-disabled': inactive,
          'aria-busy': state === 'loading',
          'data-state': visualState,
        })}
        shape={resolvedShape.box}
        appearance={colors.box[visualState]}
        hoverAppearance={colors.box[hoverState]}
      >
        <Input {...getInputProps(inputProps)} />
        {leading}
        <Label
          id={labelId}
          text={text}
          shape={resolvedShape.label}
          appearance={colors.label[visualState]}
          hoverAppearance={colors.label[hoverState]}
        />
      </Box>
    </Container>
  )
}
