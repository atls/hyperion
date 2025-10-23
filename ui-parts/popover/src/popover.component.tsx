import type { ReactNode }    from 'react'

import type { PopoverProps } from './popover.interfaces.js'

import { FloatingPortal }    from '@floating-ui/react'
import { AnimatePresence }   from 'framer-motion'
import { motion }            from 'framer-motion'
import { cloneElement }      from 'react'

import { useFloat }          from '@atls-utils/use-float'

import { Arrow }             from './arrow/index.js'
import { Container }         from './container/index.js'
import { animateProps }      from './popover.constants.js'

export const Popover = ({
  children,
  title,
  content,
  open,
  container = <Container />,
  animated = true,
  arrow = true,
  ...props
}: PopoverProps): ReactNode => {
  const { arrowRef, refs, isOpen, context, floatingStyles, getFloatingProps, getReferenceProps } =
    useFloat({ open, role: 'tooltip', ...props })

  const TriggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })

  const ContainerElement = cloneElement(
    container,
    { open: isOpen, title, content },
    <Arrow ref={arrowRef} context={context} arrow={arrow} />
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
