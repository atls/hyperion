import styled                             from '@emotion/styled'
import React, { FC, useEffect, useState } from 'react'
import { useTheme }                       from '@emotion/react'

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
  const theme = useTheme()
  // @ts-ignore
  const themeColor = theme.colors[color] || color
  // @ts-ignore
  const themeHoverColor = theme.colors[hoverColor] || hoverColor
  // @ts-ignore
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
