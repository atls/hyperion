import type { UsePopoverResult }    from './interfaces.js'
import type { PopoverProps }        from './interfaces.js'

import { useMergeRefs }             from '@floating-ui/react'
import { useTransitionStatus }      from '@floating-ui/react'
import { cloneElement }             from 'react'
import { useId }                    from 'react'
import { useState }                 from 'react'

import { useTheme }                 from '@atls-ui-parts/theme'
import { animations }               from '@atls-ui/theme/tokens'
import { useFloat }                 from '@atls-utils/use-float'

import { resolvePopoverAppearance } from './styles/appearance/resolve.js'
import { popoverShapes }            from './styles/shape/variants.js'
export const usePopover = ({
  children,
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  placement = 'top',
  appearance = 'default',
  shape = popoverShapes.default,
  contentProps,
}: PopoverProps): UsePopoverResult => {
  const theme = useTheme()
  const triggerId = useId()
  const referenceProps = { ...children.props, id: children.props.id ?? triggerId }
  const [localOpen, setLocalOpen] = useState(defaultOpen)
  const { refs, arrowRef, context, isOpen, floatingStyles, getReferenceProps, getFloatingProps } =
    useFloat({
      open: open ?? localOpen,
      onOpenChange: (nextOpen, event, reason) => {
        if (open === undefined) setLocalOpen(nextOpen)
        onOpenChange?.(nextOpen, event, reason)
      },
      placement,
      offset: shape.container.offset,
      trigger: 'click',
      triggerOnFocus: false,
      role: 'dialog',
    })
  const { isMounted, status } = useTransitionStatus(context, {
    duration: Number.parseFloat(animations.duration.sm),
  })
  const triggerRef = useMergeRefs([children.props.ref, refs.setReference])
  const floatingRef = useMergeRefs([contentProps?.ref, refs.setFloating])
  return {
    content,
    shape,
    context,
    arrowRef,
    isOpen,
    isMounted,
    trigger: cloneElement(children, { ...getReferenceProps(referenceProps), ref: triggerRef }),
    containerProps: {
      ...getFloatingProps(contentProps),
      ref: floatingRef,
      'aria-labelledby':
        contentProps?.['aria-labelledby'] ??
        (contentProps?.['aria-label'] ? undefined : referenceProps.id),
      tabIndex: contentProps?.tabIndex ?? -1,
      floatingStyles,
      'aria-hidden': isOpen ? undefined : true,
      inert: !isOpen,
      'data-transition': status,
      style: { ...resolvePopoverAppearance(appearance, theme), ...contentProps?.style },
    },
  }
}
