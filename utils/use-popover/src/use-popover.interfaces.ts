import type { Dispatch }       from 'react'
import type { ReactNode }      from 'react'
import type { SetStateAction } from 'react'
import type { ReactPortal }    from 'react'
import type { LayerProps }     from 'react-laag'

export interface UsePopoverReturn {
  isOpen: boolean
  triggerProps: object
  layerProps: LayerProps
  render: (containerProps: ReactNode) => ReactPortal | null
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
