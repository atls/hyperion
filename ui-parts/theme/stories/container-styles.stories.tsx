/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta }                from '@storybook/react'
import type { StoryObj }            from '@storybook/react'

import { clsx }                     from 'clsx'
import { useRef }                   from 'react'
import React                        from 'react'

import { Box }                      from '@atls-ui-parts/layout'
import { Column }                   from '@atls-ui-parts/layout'

import { componentContainerStyles } from './container-styles.css.js'
import { componentStyles }          from './container-styles.css.js'
import { wrapperStyles }            from './container-styles.css.js'
import { useContainerWidth }        from './use-container-width.hook.js'

const meta: Meta = {
  title: 'Components/ContainerStyles',
}

export default meta

export const Base: StoryObj = {
  name: 'Базовый',
  render: () => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const wrapperWidth = useContainerWidth(wrapperRef)

    const nestedWrapperRef = useRef<HTMLDivElement>(null)
    const nestedWrapperWidth = useContainerWidth(nestedWrapperRef)

    return (
      <Column>
        <Box ref={wrapperRef} className={wrapperStyles}>
          <Box
            fill
            className={clsx(componentStyles, componentContainerStyles)}
            alignItems='center'
            justifyContent='center'
          >
            {wrapperWidth}px
          </Box>
        </Box>
        <Box width='100%' maxWidth='300px'>
          <Box ref={nestedWrapperRef} className={wrapperStyles}>
            <Box
              fill
              className={clsx(componentStyles, componentContainerStyles)}
              alignItems='center'
              justifyContent='center'
            >
              {nestedWrapperWidth}px
            </Box>
          </Box>
        </Box>
      </Column>
    )
  },
}
