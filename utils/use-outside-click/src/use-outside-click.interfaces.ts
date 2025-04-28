import type { RefObject } from 'react'

export type UseOutsideClickType = (action: VoidFunction) => { ref: RefObject<HTMLElement | null> }
