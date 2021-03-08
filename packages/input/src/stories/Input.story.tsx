import React        from 'react'

import { useTheme } from '@emotion/react'

import { Input }    from '../index'

type ExampleProps = {
  placeholder: string
  border: string
  offset: string
  typography: string
  width: string
  height: string
  invalid: boolean
  minHeight: string
  minWidth: string
}

export const ExampleInput = ({
  placeholder,
  border = '1px solid black',
  offset,
  typography = 'Sans',
  width,
  height,
  invalid = false,
  minHeight,
  minWidth,
}: ExampleProps) => {
  const theme = useTheme()

  return (
    <Input
      theme={theme}
      placeholder={placeholder}
      border={border}
      offset={offset}
      typography={typography}
      width={width}
      height={height}
      invalid={invalid}
      minHeight={minHeight}
      minWidth={minWidth}
    />
  )
}

export default {
  title: 'Input',
  component: ExampleInput,
}
