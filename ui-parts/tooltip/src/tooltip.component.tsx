import type { ReactNode }    from 'react'

import type { TooltipProps } from './tooltip.interfaces.js'

import { FloatingPortal }    from '@floating-ui/react'
import { FloatingArrow }     from '@floating-ui/react'
import { cloneElement }      from 'react'
import React                 from 'react'

import { Condition }         from '@atls-ui-parts/condition'
import { vars }              from '@atls-ui-parts/theme'
import { useFloat }          from '@atls-utils/use-float'

import { Container }         from './container/index.js'

export const Tooltip = ({
  children,
  text,
  container = <Container />,
  animated,
  open,
  arrow = true,
  ...props
}: TooltipProps): ReactNode => {
  const { arrowRef, refs, isOpen, context, floatingStyles, getFloatingProps, getReferenceProps } =
    useFloat({ open, role: 'tooltip', ...props })

  const TriggerElement = cloneElement(children, { ref: refs.setReference, ...getReferenceProps() })

  const ContainerElement = cloneElement(
    container,
    { ref: refs.setFloating, style: floatingStyles, open: isOpen, animated, ...getFloatingProps() },
    <>
      <Condition match={!!arrow}>
        <FloatingArrow
          ref={arrowRef}
          context={context}
          width={12}
          fill={vars.colors.blackThreeQuarters}
          {...(typeof arrow === 'boolean' ? {} : arrow)}
        />
      </Condition>
      {text}
    </>
  )

  return (
    <>
      {TriggerElement}
      <FloatingPortal>{ContainerElement}</FloatingPortal>
    </>
  )
}
