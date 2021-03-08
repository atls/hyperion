import React          from 'react'

import { useTheme }   from '@emotion/react'

import { PriceInput } from '../index'

type ExampleProps = {
  placeholder: string
  border: string
  offset: string
  width: string
  height: string
  minHeight: string
  minWidth: string
}

export const ExamplePriceInput = ({
  placeholder,
  border = '1px solid black',
  offset,
  width,
  height,
  minHeight,
  minWidth,
}: ExampleProps) => {
  const theme = useTheme()

  return (
    <PriceInput
      placeholder={placeholder}
      border={border}
      offset={offset}
      width={width}
      height={height}
      minHeight={minHeight}
      minWidth={minWidth}
      theme={theme}
    />
  )
}

export default {
  title: 'Input',
  component: ExamplePriceInput,
}
