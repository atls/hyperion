import type { ReactNode }    from 'react'

import type { TooltipProps } from './tooltip.interfaces.js'

import { FloatingPortal }    from '@floating-ui/react'
import { AnimatePresence }   from 'framer-motion'
import { motion }            from 'framer-motion'
import { cloneElement }      from 'react'

import { useFloat }          from '@atls-utils/use-float'

import { Arrow }             from './arrow/index.js'
import { Container }         from './container/index.js'
import { animateProps }      from './tooltip.constants.js'

export const Tooltip = ({
  children,
  text,
  open,
  container = <Container />,
  animated = true,
  arrow = true,
  ...props
}: TooltipProps): ReactNode => {
  const { arrowRef, refs, isOpen, context, floatingStyles, getFloatingProps, getReferenceProps } =
    useFloat({ open, role: 'tooltip', ...props })

  const TriggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })

  const ContainerElement = cloneElement(
    container,
    { open: isOpen },
    <>
      <Arrow ref={arrowRef} context={context} arrow={arrow} />
      {text}
    </>
  )

  const motionProps = typeof animated === 'boolean' ? animateProps : animated

  return (
    <>
      {TriggerElement}
      <FloatingPortal>
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
          <AnimatePresence>
            {!!isOpen && (
              <motion.div {...(animated ? motionProps : {})}>{ContainerElement}</motion.div>
            )}
          </AnimatePresence>
        </div>
      </FloatingPortal>
    </>
  )
}
