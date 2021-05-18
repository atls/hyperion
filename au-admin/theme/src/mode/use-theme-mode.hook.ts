import { useContext }       from 'react'
import { useEffect }        from 'react'
import { useMemo }          from 'react'
import { useState }         from 'react'

import { ThemeModeContext } from './theme-mode.context'
import { ThemeModeStore }   from './theme-mode.store'

export const useThemeMode = () => {
  const store: ThemeModeStore = useContext(ThemeModeContext)

  if (!store) {
    throw new Error('Missing <ThemeModeProvider>')
  }

  const [, setState] = useState(store.getCurrent())

  useEffect(() => {
    const onChange = (mode) => setState(mode)

    store.on('change', onChange)

    return () => {
      store.off('change', onChange)
    }
  }, [store])

  const setMode = useMemo(() => store.set.bind(store), [store])

  return [store.getCurrent(), setMode]
}
