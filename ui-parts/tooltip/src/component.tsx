import type { ReactNode }     from 'react'

import type { TooltipProps }  from './interfaces.js'

import { FloatingPortal }     from '@floating-ui/react'
import { AnimatePresence }    from 'framer-motion'
import { motion }             from 'framer-motion'
import { cloneElement }       from 'react'

import { useFloat }           from '@atls-utils/use-float'

import { Arrow }              from './arrow/index.js'
import { Container }          from './container/index.js'
import { animateProps }       from './constants.js'
import { tooltipAppearances } from './styles/index.js'
import { tooltipShapes }      from './styles/index.js'

export const Tooltip = ({
  appearance,
  children,
  text,
  open,
  container,
  animated = true,
  arrow = true,
  shape,
  ...props
}: TooltipProps): ReactNode => {
  const { arrowRef, refs, isOpen, context, floatingStyles, getFloatingProps, getReferenceProps } =
    useFloat({ open, role: 'tooltip', ...props })

  const containerElement = container ?? <Container />
  const defaultAppearance = container === undefined ? tooltipAppearances.default : undefined
  const defaultShape = container === undefined ? tooltipShapes.default : undefined
  const containerAppearance = appearance ?? defaultAppearance
  const containerShape = shape ?? defaultShape
  const TriggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })
  const containerClassName = [
    containerElement.props.className,
    containerAppearance?.container,
    containerShape?.container,
  ]
    .filter(Boolean)
    .join(' ')

  const ContainerElement = cloneElement(
    containerElement,
    { className: containerClassName || undefined, open: isOpen },
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
