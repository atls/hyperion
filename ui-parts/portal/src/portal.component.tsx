import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { useEffect }              from 'react'
import { useRef }                 from 'react'
import { createPortal }           from 'react-dom'

export const Portal: FC<PropsWithChildren> = ({ children }) => {
  if (typeof window === 'undefined') {
    return null
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const portal = useRef<HTMLDivElement>(document.createElement('div'))

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const node = portal.current

    document.body.appendChild(node)

    return (): void => {
      document.body.removeChild(node)
    }
  }, [portal])

  return createPortal(children, portal.current)
}
