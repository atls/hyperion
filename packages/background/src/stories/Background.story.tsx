import React          from 'react'

import { Background } from '../index'

const stubImageUrl = 'https://storybook.js.org/images/home/build-addons.png'

type ExampleProps = {
  backgroundSize: 'cover' | 'contain' | 'auto'
  withImage: boolean
  backgroundColor: any
}

export const ExampleBackground = ({
  backgroundSize,
  backgroundColor,
  withImage = true,
}: ExampleProps) => (
  <Background
    backgroundImage={withImage && `url(${stubImageUrl})`}
    backgroundColor={backgroundColor}
    backgroundSize={backgroundSize}
  />
)

export default {
  title: 'Background',
  component: ExampleBackground,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
