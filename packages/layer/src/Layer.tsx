import React, { useEffect }                                                    from 'react'
import { createPortal }                                                        from 'react-dom'
import { background, border, color, flexbox, layout, position, shadow, space } from 'styled-system'

import styled                                                                  from '@emotion/styled'

import { LayerProps }                                                          from './types'

const Wrapper = styled.div(border, layout, space, flexbox, color, shadow, position, background)

const Layer = ({ appRoot, active, setActive, children, outsideClick, ...props }: LayerProps) => {
  const container = document.createElement('div')
  const root = document.getElementById(appRoot)

  const unmountLayer = () => {
    if (root.contains(container)) {
      root.removeChild(container)
      window.removeEventListener('click', unmountLayer)
      setActive(false)
    }
  }

  const onOutsideClick = outsideClick
    ? (event) => !container.contains(event.target) && unmountLayer()
    : () => {}

  useEffect(() => {
    if (active) {
      window.addEventListener('click', onOutsideClick)
      root.appendChild(container)
    }
    return () => {
      unmountLayer()
      window.removeEventListener('click', onOutsideClick)
    }
  }, [active])

  return createPortal(<Wrapper {...props}>{children}</Wrapper>, container)
}

Layer.defaultProps = {
  appRoot: 'root',
  active: false,
  outsideClick: true,
}

export default Layer
