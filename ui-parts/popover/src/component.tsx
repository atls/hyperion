import type { ReactNode }     from 'react'

import type { PopoverProps }  from './interfaces.js'

import { FloatingPortal }     from '@floating-ui/react'
import { AnimatePresence }    from 'framer-motion'
import { motion }             from 'framer-motion'
import { cloneElement }       from 'react'

import { useFloat }           from '@atls-utils/use-float'

import { Arrow }              from './arrow/index.js'
import { Container }          from './container/index.js'
import { animateProps }       from './constants.js'
import { popoverAppearances } from './styles/index.js'
import { popoverShapes }      from './styles/index.js'

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

  const defaultContainer = container === undefined
  const containerElement = container ?? <Container />
  const TriggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })
  const rootClassName = [
    containerElement.props.className,
    defaultContainer && popoverAppearances.default.root,
    defaultContainer && popoverShapes.default.root,
    defaultContainer && appearance?.root,
    defaultContainer && shape?.root,
  ]
    .filter(Boolean)
    .join(' ')
  const titleClassName = [
    defaultContainer && popoverAppearances.default.title,
    defaultContainer && popoverShapes.default.title,
    defaultContainer && appearance?.title,
    defaultContainer && shape?.title,
  ]
    .filter(Boolean)
    .join(' ')
  const contentClassName = [
    defaultContainer && popoverAppearances.default.content,
    defaultContainer && popoverShapes.default.content,
    defaultContainer && appearance?.content,
    defaultContainer && shape?.content,
  ]
    .filter(Boolean)
    .join(' ')

  const ContainerElement = cloneElement(
    containerElement,
    {
      open: isOpen,
      title,
      content,
      ...(defaultContainer
        ? {
            className: rootClassName || undefined,
            titleClassName: titleClassName || undefined,
            contentClassName: contentClassName || undefined,
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
