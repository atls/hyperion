import type { ReactNode }   from 'react'

import type { ModalProps }  from './interfaces.js'

import { FloatingPortal }   from '@floating-ui/react'
import { clsx }             from 'clsx'

import { CircleProgress }   from '@atls-ui-parts/progress'
import { useTheme }         from '@atls-ui-parts/theme'

import { Actions }          from './actions/component.js'
import { Box }              from './box/component.js'
import { Close }            from './close/component.js'
import { Container }        from './container/component.js'
import { modalAppearances } from './styles/appearance/variants.js'
import { dialogStyles }     from './styles/dialog.css.js'
import { modalShapes }      from './styles/shape/variants.js'
import { useModal }         from './useModal.js'

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
  initialFocus,
  onClose,
  closeLabel = 'Close',
  appearance = 'default',
  shape = modalShapes.md,
  backdropProps,
  className,
  style,
  ...props
}: ModalProps): ReactNode => {
  const theme = useTheme()
  const colors = typeof appearance === 'string' ? modalAppearances[appearance](theme) : appearance
  const modal = useModal(open, state, initialFocus, onClose)
  return (
    <dialog
      {...modal.getDialogProps(props)}
      ref={modal.setDialog}
      className={clsx(dialogStyles, backdropProps?.className)}
      style={{
        padding: shape.container.padding,
        backgroundColor: colors.backdropColor,
        ...backdropProps?.style,
      }}
      onPointerDown={(event) => {
        modal.resetEscape()
        props.onPointerDown?.(event)
        backdropProps?.onPointerDown?.(event)
        if (!event.defaultPrevented && event.target === event.currentTarget) onClose?.()
      }}
    >
      {open && (
        <FloatingPortal root={modal.dialog} preserveTabOrder={false}>
          <Box
            ref={modal.setContent}
            appearance={colors.box}
            shape={shape.box}
            className={className}
            style={style}
          >
            <Container
              shape={shape.container}
              loading={state === 'loading'}
              close={
                showClose ? (
                  <Close
                    appearance={colors.close}
                    icon={closeIcon}
                    label={closeLabel}
                    shape={shape.close}
                    onClose={onClose}
                  />
                ) : null
              }
              loader={
                loadingIndicator === undefined ? (
                  <CircleProgress aria-label='Loading' shape={shape.loading} />
                ) : (
                  loadingIndicator
                )
              }
              actions={
                state === 'destructive' ? (
                  <Actions
                    shape={shape.actions}
                    confirmAction={confirmAction}
                    cancelAction={cancelAction}
                    onConfirm={onConfirm}
                    onCancel={onCancel ?? onClose}
                  />
                ) : null
              }
            >
              {children}
            </Container>
          </Box>
        </FloatingPortal>
      )}
    </dialog>
  )
}
