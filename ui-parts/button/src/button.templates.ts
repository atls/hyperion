export const stylesTemplate = ({
  size,
  fontSize,
  fontFamily,
  shapeRounding,
  fontWeight,
  paddingLeft,
  paddingRight,
  paddingRatio,
  fontColor,
  backgroundColor,
  borderColor,
  invertedBorderWidth,
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

import { createBaseStyles } from '@atls-ui-parts/button'

import { createShapeStyles } from '@atls-ui-parts/button'

import { createContentStyles } from '@atls-ui-parts/button'

import { createAppearanceStyles } from '@atls-ui-parts/button'

const shapeNormalSizeStyles = createShapeStyles({
${buildProps({
  size,
  fontSize,
  fontFamily,
  fontWeight,
  rounding: shapeRounding,
  paddingLeft,
  paddingRight,
  paddingRatio,
})}
})

const appearancePrimaryStyles = createAppearanceStyles({
${buildProps({
  fontColor,
  backgroundColor,
  borderColor,
  invertedBorderWidth,
})}
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
    normal: shapeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
    primary: appearancePrimaryStyles,
})
`
}

export const componentTemplate = ({ contentDivider }) => `
import React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'

import { Content } from '@atls-ui-parts/button'
import { ButtonProps } from '@atls-ui-parts/button'

import { baseStyles } from './button.styles'
import { shapeStyles } from './button.styles'
import { contentStyles } from './button.styles'
import { variantStyles } from './button.styles'

export const ButtonElement = styled.button(
  baseStyles,
  contentStyles,
  shapeStyles,
  variantStyles
)

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonElement {...props}>
    <Content${contentDivider ? ` divider={${contentDivider}}` : ''}>
      {children}
    </Content>
  </ButtonElement>
)
`

export const templates = {
  'button.styles.ts': stylesTemplate,
  'button.component.tsx': componentTemplate,
}
