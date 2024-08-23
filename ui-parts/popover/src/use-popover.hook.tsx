import React                 from 'react'
import { ReactElement }      from 'react'

import { UseTooltipOptions } from '@atls-ui-parts/tooltip'
import { useTooltip }        from '@atls-ui-parts/tooltip'

import { Container }         from './container/index.js'

type RenderOptions = { title?: string; content?: ReactElement }

export const usePopover = ({
  container = <Container />,
  arrowOptions = {
    backgroundColor: '#fff',
    angle: 35,
    size: 8,
  },
  ...props
}: UseTooltipOptions) => {
  const { close, isOpen, layerProps, render, style, triggerProps } = useTooltip({
    ...props,
    arrowOptions,
    container,
  })

  const renderContainer = (options: RenderOptions) => render(options)

  return {
    close,
    isOpen,
    layerProps,
    render: renderContainer,
    style,
    triggerProps,
  }
}
