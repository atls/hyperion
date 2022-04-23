import { useContext }    from 'react'
import { useEffect }     from 'react'
import { useState }      from 'react'

import { Context }       from './parallax.context'
import { ParallaxStore } from './parallax.store'

export const useParallax = (): any => {
  const store: ParallaxStore = useContext(Context)

  if (!store) {
    throw new Error('Missing <ParallaxProvider>')
  }

  const [, setState] = useState(store.getState())

  useEffect(() => {
    store.addListener('changed', setState)

    return () => {
      store.removeListener('changed', setState)
    }
  }, [store])

  return [store.scrollY, store.windowHeight]
}
