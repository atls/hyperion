import { FunctionComponent, useEffect, useRef } from 'react'
import { createPortal }                         from 'react-dom'

const Portal: FunctionComponent = ({ children }) => {
  if (typeof window === 'undefined') {
    return null
  }

  const portal = useRef(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(portal.current)

    return () => {
      document.body.removeChild(portal.current)
    }
  }, [portal])

  return createPortal(children, portal.current)
}

export { Portal }
