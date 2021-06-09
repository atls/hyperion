export const stylesTemplate = ({
  size,
  borderRadius,
  backgroundColor,
  borderColor,
  borderWidth,
}: any = {}) => {
  const buildProps = (props) => {
    const values = Object.keys(props).reduce((result, key) => {
      const value = props[key]

      if (!(value === null || value === undefined || value === '')) {
        const isPlainValue = typeof value === 'number' || typeof value === 'boolean'
        const formattedValue = isPlainValue ? value : JSON.stringify(value)

        // @ts-ignore
        result.push(`  ${key}: ${formattedValue}`)
      }

      return result
    }, [])

    return values.join(',\n')
  }

  return `
import { prop, switchProp } from 'styled-tools'

import { createBaseStyles } from '@atls-ui-parts/avatar'
import { createShapeStyles } from '@atls-ui-parts/avatar'
import { createAppearanceStyles } from '@atls-ui-parts/avatar'

const shapeNormalSizeStyles = createShapeStyles({
${buildProps({
  size,
  borderRadius,
  borderWidth,
})}
})

const appearancePrimaryStyles = createAppearanceStyles({
${buildProps({
  backgroundColor,
  borderColor,
})}
})

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
    normal: shapeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
    primary: appearancePrimaryStyles,
})
`
}

export const componentTemplate = () => `
import React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'

import { AvatarProps } from '@atls-ui-parts/avatar'
import { TextContainer } from '@atls-ui-parts/avatar'

import { baseStyles } from './avatar.styles'
import { shapeStyles } from './avatar.styles'
import { variantStyles } from './avatar.styles'

export const AvatarElement = styled.div(
  baseStyles,
  shapeStyles,
  variantStyles,
)

export const Avatar: FC<Avatar> = ({ text, ...props }) => (
  <AvatarElement {...props}>
    <TextContainer>
      {text}
    </TextContainer>
  </AvatarElement>
)
`

export const templates = {
  'avatar.styles.ts': stylesTemplate,
  'avatar.component.tsx': componentTemplate,
}
