import type { DialogHTMLAttributes } from 'react'
import type { RefObject }            from 'react'

import type { ModalState }           from './interfaces.js'

import { useLayoutEffect }           from 'react'
import { useRef }                    from 'react'
import { useState }                  from 'react'

export const useModal = (
  open: boolean,
  state: ModalState,
  initialFocus?: RefObject<HTMLElement | null>,
  onClose?: () => void
) => {
  const [dialog, setDialog] = useState<HTMLDialogElement | null>(null)
  const [content, setContent] = useState<HTMLDivElement | null>(null)
  const descendantEscape = useRef(false)

  useLayoutEffect(() => {
    if (!dialog) return
    if (!open) {
      descendantEscape.current = false
      if (dialog.open) dialog.close()
      return
    }
    if (!content) return
    if (!dialog.open) {
      dialog.showModal()
      initialFocus?.current?.focus({ preventScroll: true })
    } else if (dialog.ownerDocument.activeElement === dialog.ownerDocument.body) {
      dialog.focus({ preventScroll: true })
    }
  }, [content, dialog, initialFocus, open, state])

  useLayoutEffect(
    () => () => {
      dialog?.close()
    },
    [dialog]
  )

  const resetEscape = () => {
    descendantEscape.current = false
  }
  const getDialogProps = (
    props: DialogHTMLAttributes<HTMLDialogElement>
  ): DialogHTMLAttributes<HTMLDialogElement> => ({
    ...props,
    onKeyDownCapture: (event) => {
      props.onKeyDownCapture?.(event)
      if (event.key === 'Escape') descendantEscape.current = true
    },
    onKeyDown: (event) => {
      props.onKeyDown?.(event)
      if (event.key === 'Escape') descendantEscape.current = false
    },
    onKeyUp: (event) => {
      props.onKeyUp?.(event)
      resetEscape()
    },
    onCancel: (event) => {
      if (event.target !== event.currentTarget) return
      event.preventDefault()
      const handled = descendantEscape.current
      resetEscape()
      if (!handled) onClose?.()
      else if (dialog?.ownerDocument.activeElement === dialog?.ownerDocument.body)
        dialog?.focus({ preventScroll: true })
    },
    onClose: (event) => {
      if (event.target === event.currentTarget && open && !dialog?.open) onClose?.()
    },
  })

  return { dialog, setDialog, setContent, getDialogProps, resetEscape }
}
