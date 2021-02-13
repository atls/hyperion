import React, { FC, useEffect, useState } from 'react'

import styled                             from '@emotion/styled'

interface Props {
  color?: string
  hoverColor?: string
  clickedColor?: string
  children?: any
  theme: any
}

const IconUI = styled.div({
  cursor: 'pointer',
  display: 'inline-flex',
})

export const IconsManager: FC<Props> = ({ theme, children, hoverColor, clickedColor, color }) => {
  const themeColor = theme.colors[color] || color
  const themeHoverColor = theme.colors[hoverColor] || hoverColor
  const themeClickedColor = theme.colors[clickedColor] || clickedColor

  const [currentColor, setCurrentColor] = useState(themeColor)

  useEffect(() => {
    setCurrentColor(themeColor)
  }, [themeColor])

  return (
    <IconUI
      onMouseEnter={() => setCurrentColor(themeHoverColor || themeColor)}
      onMouseLeave={() => setCurrentColor(themeColor)}
      onMouseDown={() => setCurrentColor(themeClickedColor || themeColor)}
      onMouseUp={() => setCurrentColor(themeColor)}
    >
      {React.cloneElement(children, { key: 'a', color: currentColor })}
    </IconUI>
  )
}
