/* eslint-disable react/require-default-props */

import React, { FC, useState } from 'react'

import { withTheme }           from '@emotion/react'

import { LinkUI }              from './LinkUI'

interface LinkProps {
  children?: any
  href?: string
  fontWeight?: string | number | string[] | number[]
  lineHeight?: string | number | string[] | number[]
  fontSize?: string | number | string[] | number[]
  fontFamily?: string
  whiteSpace?: string
  dangerouslySetInnerHTML?: any
  color?: string
  hoverColor?: string
  underlineColor?: string
  clickedColor?: string
  textTransform?: string
  underline?: boolean
  target?: string
  width?: string
  pt?: string
  onClick?: any
  onMouseOver?: () => void
  onMouseLeave?: () => void
}

export const Link: FC<LinkProps> = React.forwardRef(
  (
    {
      children,
      href,
      fontSize,
      lineHeight,
      fontWeight,
      color,
      hoverColor,
      clickedColor,
      underline,
      underlineColor,
      ...props
    },
    ref,
  ) => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    return (
      <LinkUI
        fontSize={fontSize}
        lineHeight={lineHeight}
        ref={ref}
        fontWeight={fontWeight}
        /* eslint-disable no-nested-ternary */
        color={clicked ? clickedColor || color : hovered ? hoverColor || color : color}
        href={href}
        underline={underline && hovered && ((!clicked && clickedColor) || !clickedColor)}
        underlineColor={underlineColor}
        onMouseOver={() => setHovered(true)}
        onFocus={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          setClicked(false)
        }}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        {...props}
      >
        {children}
      </LinkUI>
    )
  },
)
