import type { MotionValue }   from 'framer-motion'

import type { ParallaxStore } from './parallax.store.js'

import { useContext }         from 'react'
import { useEffect }          from 'react'
import { useState }           from 'react'

import { Context }            from './parallax.context.js'

export const useParallax = (): [MotionValue<number> | null, number] => {
  const store: ParallaxStore = useContext(Context)

  if (!store) {
    throw new Error('Missing <ParallaxProvider>')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.addListener('changed', setState)

    return (): void => {
      store.removeListener('changed', setState)
    }
  }, [store])

  return [store.scrollY, store.windowHeight] as const
}
