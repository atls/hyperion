import type { RefObject }  from 'react'

import type { ModalState } from './interfaces.js'

import { useLayoutEffect } from 'react'
import { useRef }          from 'react'

export const useModal = (
  open: boolean,
  state: ModalState,
  initialFocus?: RefObject<HTMLElement | null>
) => {
  const ref = useRef<HTMLDialogElement>(null)
  useLayoutEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      initialFocus?.current?.focus({ preventScroll: true })
    } else if (open && dialog.ownerDocument.activeElement === dialog.ownerDocument.body)
      dialog.focus({ preventScroll: true })
    if (!open && dialog.open) dialog.close()
  }, [initialFocus, open, state])
  useLayoutEffect(
    () => () => {
      ref.current?.close()
    },
    []
  )
  return ref
}
