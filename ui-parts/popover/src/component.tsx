import type { ReactNode }         from 'react'

import type { PopoverProps }      from './interfaces.js'
import type { PopoverStyleSlots } from './interfaces.js'

import { FloatingPortal }         from '@floating-ui/react'
import { AnimatePresence }        from 'framer-motion'
import { motion }                 from 'framer-motion'
import { cloneElement }           from 'react'

import { useFloat }               from '@atls-utils/use-float'

import { Arrow }                  from './arrow/index.js'
import { Container }              from './container/index.js'
import { animateProps }           from './constants.js'
import { popoverAppearances }     from './styles/index.js'
import { popoverShapes }          from './styles/index.js'

const mergeClassName = (...classNames: Array<string | undefined>): string | undefined => {
  const className = classNames.filter(Boolean).join(' ')

  return className || undefined
}

const mergeStyleSlots = (
  defaultSlots: PopoverStyleSlots,
  customSlots?: PopoverStyleSlots
): PopoverStyleSlots => ({
  root: mergeClassName(defaultSlots.root, customSlots?.root),
  title: mergeClassName(defaultSlots.title, customSlots?.title),
  content: mergeClassName(defaultSlots.content, customSlots?.content),
})

export const Popover = ({
  appearance,
  children,
  title,
  content,
  open,
  container,
  animated = true,
  arrow = true,
  shape,
  ...props
}: PopoverProps): ReactNode => {
  const { arrowRef, refs, isOpen, context, floatingStyles, getFloatingProps, getReferenceProps } =
    useFloat({ open, role: 'tooltip', ...props })

  const TriggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })
  const defaultContainer = container === undefined
  const containerElement = container ?? <Container />

  const ContainerElement = cloneElement(
    containerElement,
    {
      open: isOpen,
      title,
      content,
      ...(defaultContainer
        ? {
            appearance: mergeStyleSlots(popoverAppearances.default, appearance),
            shape: mergeStyleSlots(popoverShapes.default, shape),
          }
        : {}),
    },
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
