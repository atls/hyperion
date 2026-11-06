import type { ReactNode }              from 'react'

import type { TooltipProps }           from './interfaces.js'

import { FloatingPortal }              from '@floating-ui/react'
import { useMergeRefs }                from '@floating-ui/react'
import { useTransitionStatus }         from '@floating-ui/react'
import { cloneElement }                from 'react'

import { useTheme }                    from '@atls-ui-parts/theme'
import { useFloat }                    from '@atls-utils/use-float'

import { Arrow }                       from './arrow/component.js'
import { Box }                         from './box/component.js'
import { DEFAULT_PRESS_OPEN_DURATION } from './constants.js'
import { TOOLTIP_ANIMATION_DURATION }  from './constants.js'
import { Container }                   from './container/component.js'
import { Text }                        from './text/component.js'
import { resolveTooltipAppearance }    from './styles/appearance/resolve.js'
import { tooltipShapes }               from './styles/shape/variants.js'
import { useTooltipOpen }              from './useTooltipOpen.js'

export const Tooltip = ({
  children,
  text,
  open,
  onOpenChange,
  placement = 'top',
  trigger = 'hover',
  pressOpenDuration = DEFAULT_PRESS_OPEN_DURATION,
  appearance = 'default',
  shape = tooltipShapes.default,
  mouseEnterDelay,
  mouseLeaveDelay,
}: TooltipProps): ReactNode => {
  const theme = useTheme()
  const tooltipOpen = useTooltipOpen(open, onOpenChange, trigger, pressOpenDuration)
  const { refs, arrowRef, context, isOpen, floatingStyles, getReferenceProps, getFloatingProps } =
    useFloat({
      open: tooltipOpen.open,
      onOpenChange: tooltipOpen.onOpenChange,
      placement,
      offset: shape.container.offset,
      trigger: trigger === 'hover' ? 'hover' : 'click',
      role: 'tooltip',
      mouseEnterDelay,
      mouseLeaveDelay,
    })
  const { isMounted, status } = useTransitionStatus(context, {
    duration: TOOLTIP_ANIMATION_DURATION,
  })
  const triggerRef = useMergeRefs([children.props.ref, refs.setReference])
  const triggerElement = cloneElement(children, {
    ...getReferenceProps(children.props),
    ref: triggerRef,
  })

  return (
    <>
      {triggerElement}
      {isMounted && (
        <FloatingPortal>
          <Container
            ref={refs.setFloating}
            {...getFloatingProps()}
            aria-hidden={isOpen ? undefined : true}
            data-transition={status}
            floatingStyles={floatingStyles}
            shape={shape.container}
            style={resolveTooltipAppearance(appearance, theme)}
          >
            <Box shape={shape.box}>
              <Text shape={shape.text} text={text} />
              <Arrow arrowRef={arrowRef} context={context} shape={shape.arrow} />
            </Box>
          </Container>
        </FloatingPortal>
      )}
    </>
  )
}
