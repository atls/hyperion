import type { ReactNode }          from 'react'

import type { RendererProps }      from './renderer.interfaces.js'

import { AnimatePresence }         from 'framer-motion'
import { clsx }                    from 'clsx'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { createPortal }            from 'react-dom'

import { Condition }               from '@atls-ui-parts/condition'
import { Box }                     from '@atls-ui-parts/layout'

import { rendererContainerStyles } from './renderer.css.js'

export const Renderer = ({ children, className, opened, ...props }: RendererProps): ReactNode => {
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
