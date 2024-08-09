import { createContext } from 'react'

import { ParallaxStore } from './parallax.store.js'

export const Context = createContext(new ParallaxStore(null, 0))

export const { Provider, Consumer } = Context
