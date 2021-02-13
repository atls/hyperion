import React          from 'react'

import { Background } from '../index'

const stubImageUrl = 'https://storybook.js.org/images/home/build-addons.png'

type ExampleProps = {
  position: 'relative' | 'absolute' | 'fixed' | 'inherit'
  width: any
  height: any
  backgroundSize: 'cover' | 'contain' | 'auto'
  withImage: boolean
  backgroundColor: any
}

export const ExampleBackground = ({
  position,
  width,
  height,
  backgroundSize,
  backgroundColor,
  withImage = true,
}: ExampleProps) => (
  <Background
    backgroundImage={withImage && `url(${stubImageUrl})`}
    backgroundColor={backgroundColor}
    backgroundSize={backgroundSize}
    position={position}
    width={width}
    height={height}
  />
)

export default {
  title: 'Background',
  component: ExampleBackground,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
