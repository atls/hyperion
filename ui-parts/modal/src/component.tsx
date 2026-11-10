import type { ReactNode }       from 'react'

import type { ModalProps }      from './interfaces.js'

import { FloatingFocusManager } from '@floating-ui/react'
import { FloatingOverlay }      from '@floating-ui/react'
import { FloatingPortal }       from '@floating-ui/react'
import { Children }             from 'react'
import { clsx }                 from 'clsx'

import { Button }               from '@atls-ui-parts/button'
import { CircleProgress }       from '@atls-ui-parts/progress'
import { buttonAppearances }    from '@atls-ui-parts/button'
import { useTheme }             from '@atls-ui-parts/theme'
import { useFloat }             from '@atls-utils/use-float'

import { Box }                  from './box/component.js'
import { Close }                from './close/component.js'
import { containerStyles }      from './container/styles.css.js'
import { modalAppearances }     from './styles/appearance/variants.js'
import { actionsStyles }        from './styles/content.css.js'
import { loadingStyles }        from './styles/content.css.js'
import { modalShapes }          from './styles/shape/variants.js'

export const Modal = ({
  children,
  state = 'default',
  showClose = true,
  closeIcon,
  loadingIndicator,
  confirmAction,
  cancelAction,
  onConfirm,
  onCancel,
  open = false,
  onClose,
  closeLabel = 'Close',
  appearance = 'default',
  shape = modalShapes.md,
  backdropProps,
  focusProps,
  className,
  style,
  ...props
}: ModalProps): ReactNode => {
  const hasActions =
    confirmAction === undefined ||
    cancelAction === undefined ||
    Children.toArray([confirmAction, cancelAction]).length > 0
  const theme = useTheme()
  const colors = typeof appearance === 'string' ? modalAppearances[appearance](theme) : appearance
  const { refs, isOpen, context, getFloatingProps } = useFloat({
    open,
    onOpenChange: (nextOpen) => {
      if (!nextOpen) onClose?.()
    },
    role: 'dialog',
    dismiss: { outsidePressEvent: 'mousedown' },
  })
  if (!isOpen) return null
  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        {...backdropProps}
        className={clsx(containerStyles, backdropProps?.className)}
        style={{ backgroundColor: colors.backdropColor, ...backdropProps?.style }}
      >
        <FloatingFocusManager context={context} {...focusProps}>
          <Box
            ref={refs.setFloating}
            {...getFloatingProps(props)}
            aria-modal='true'
            appearance={colors.box}
            shape={shape.box}
            className={className}
            style={style}
          >
            {showClose && (
              <Close
                appearance={colors.close}
                icon={closeIcon}
                label={closeLabel}
                shape={shape.close}
                onClose={onClose}
              />
            )}
            {state === 'loading' ? (
              <div className={loadingStyles}>
                {loadingIndicator === undefined ? (
                  <CircleProgress aria-label='Loading' shape={shape.loading} />
                ) : (
                  loadingIndicator
                )}
              </div>
            ) : (
              children
            )}
            {state === 'destructive' && hasActions && (
              <div className={actionsStyles} style={{ gap: shape.actions.gap }}>
                {confirmAction === undefined ? (
                  <Button
                    fullWidth
                    appearance={buttonAppearances.primary}
                    shape={shape.actions.button}
                    onClick={onConfirm}
                  >
                    Ok
                  </Button>
                ) : (
                  confirmAction
                )}
                {cancelAction === undefined ? (
                  <Button
                    fullWidth
                    appearance={buttonAppearances.secondary}
                    shape={shape.actions.button}
                    onClick={onCancel ?? onClose}
                  >
                    Cancel
                  </Button>
                ) : (
                  cancelAction
                )}
              </div>
            )}
          </Box>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  )
}
