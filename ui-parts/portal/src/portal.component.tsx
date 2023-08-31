import { FunctionComponent } from 'react'
import { PropsWithChildren } from 'react'
import { useEffect }         from 'react'
import { useRef }            from 'react'
import { createPortal }      from 'react-dom'

const Portal: FunctionComponent<PropsWithChildren<any>> = ({ children }) => {
  if (typeof window === 'undefined') {
    return null
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const portal = useRef(document.createElement('div'))

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const node = portal.current

    document.body.appendChild(node)

    return () => {
      document.body.removeChild(node)
    }
  }, [portal])

  // @ts-ignore
  return createPortal(children, portal.current)
}

export { Portal }
