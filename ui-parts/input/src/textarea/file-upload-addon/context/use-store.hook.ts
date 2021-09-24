import { useContext } from 'react'

import { Context }    from './context'

const useStore = () => useContext(Context)

export { useStore }
