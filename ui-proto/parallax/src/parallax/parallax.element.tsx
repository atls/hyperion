import styled                from '@emotion/styled'
import { useWindowSize }     from '@atls-ui-parts/dom'

import React                 from 'react'
import { useViewportScroll } from 'framer-motion'
import { useElementScroll }  from 'framer-motion'
import { useMemo }           from 'react'
import { useRef }            from 'react'
import { useEffect }         from 'react'

import { ParallaxStore }     from '../context'
import { Provider }          from '../context'

const ParallaxRenderer = ({ children, isIphone, ...props }) => {
  const ref = useRef(null)
  const { scrollY: scrollViewport } = useViewportScroll()
  const { scrollY: scrollElement } = useElementScroll(ref)
  const { innerHeight } = useWindowSize()
  const store = useMemo(() => {
    if (isIphone) return new ParallaxStore(scrollElement, innerHeight)
    return new ParallaxStore(scrollViewport, innerHeight)
  }, [scrollViewport, scrollElement, isIphone, innerHeight])

  useEffect(() => {
    if (isIphone) {
      const htmlStyle = document.getElementsByTagName('html')[0].style
      const bodyStyle = document.getElementsByTagName('body')[0].style

      htmlStyle.height = '100%'
      htmlStyle.overflow = 'hidden'
      bodyStyle.height = '100%'
      bodyStyle.overflow = 'hidden'
    }
  }, [isIphone])

  return (
    <Provider value={store}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </Provider>
  )
}

const ParallaxElement: any = styled(ParallaxRenderer)()

export { ParallaxElement }
