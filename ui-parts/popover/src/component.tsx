import type { ReactNode }     from 'react'

import type { PopoverProps }  from './interfaces.js'

import { FloatingPortal }     from '@floating-ui/react'
import { AnimatePresence }    from 'framer-motion'
import { motion }             from 'framer-motion'
import { cloneElement }       from 'react'

import { useFloat }           from '@atls-utils/use-float'

import { Arrow }              from './arrow/index.js'
import { animateProps }       from './constants.js'
import { popoverAppearances } from './styles/index.js'
import { popoverShapes }      from './styles/index.js'

export const Popover = ({
  appearance = popoverAppearances.default,
  children,
  content,
  open,
  animated = true,
  arrow = true,
  shape = popoverShapes.default,
  ...props
}: PopoverProps): ReactNode => {
  const { arrowRef, refs, isOpen, context, floatingStyles, getFloatingProps, getReferenceProps } =
    useFloat({ open, trigger: 'click', triggerOnFocus: false, role: 'dialog', ...props })

  const triggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })

  const popoverElement = (
    <div className={[appearance.root, shape.root].filter(Boolean).join(' ')}>
      {content}
      <Arrow ref={arrowRef} context={context} arrow={arrow} />
    </div>
  )

  const motionProps = typeof animated === 'boolean' ? animateProps : animated

  return (
    <>
      {triggerElement}
      <FloatingPortal>
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
          <AnimatePresence>
            {!!isOpen && (
              <motion.div {...(animated ? motionProps : {})}>{popoverElement}</motion.div>
            )}
          </AnimatePresence>
        </div>
      </FloatingPortal>
    </>
  )
}
