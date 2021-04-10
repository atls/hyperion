import React, { FC, useEffect, useState } from 'react'
import { useTheme }                       from 'emotion-theming'

import styled                             from '@emotion/styled'

interface Props {
  color?: string
  hoverColor?: string
  clickedColor?: string
  children?: any
}

const IconUI = styled.div({
  cursor: 'pointer',
  display: 'inline-flex',
})

export const IconsManager: FC<Props> = ({ children, hoverColor, clickedColor, color }) => {
  const theme: any = useTheme()

  const themeColor = theme.colors[color]
  const themeHoverColor = theme.colors[hoverColor]
  const themeClickedColor = theme.colors[clickedColor]

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
