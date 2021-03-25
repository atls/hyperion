/* eslint-disable react/require-default-props */

import React, { FC, useState } from 'react'

import { LinkUI }              from './LinkUI'
import { LinkProps }           from './types'

export const Link: FC<LinkProps> = React.forwardRef(
  (
    { children, href, fontSize, lineHeight, fontWeight, color, hoverColor, clickedColor, ...props },
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
