import type { FC }                 from 'react'

import type { RendererProps }      from './renderer.interfaces.js'

import { AnimatePresence }         from 'framer-motion'
import { clsx }                    from 'clsx'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { createPortal }            from 'react-dom'
import React                       from 'react'

import { Condition }               from '@atls-ui-parts/condition'
import { Box }                     from '@atls-ui-parts/layout'

import { rendererContainerStyles } from './renderer.css.js'

export const Renderer: FC<RendererProps> = ({ children, className, opened, ...props }) => {
  const [body, setBody] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setBody(document.body)
  }, [])

  return (
    body &&
    createPortal(
      <AnimatePresence>
        <Condition match={Boolean(opened)}>
          <Box className={clsx(className, rendererContainerStyles)} {...props}>
            {children}
          </Box>
        </Condition>
      </AnimatePresence>,
      body
    )
  )
}
