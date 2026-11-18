'use client'

import type { PopoverProps }    from './interfaces.js'

import { FloatingFocusManager } from '@floating-ui/react'
import { FloatingPortal }       from '@floating-ui/react'

import { Arrow }                from './arrow/component.js'
import { Box }                  from './box/component.js'
import { Container }            from './container/component.js'
import { usePopover }           from './usePopover.js'
export const Popover = (props: PopoverProps) => {
  const { content, shape, context, arrowRef, isOpen, isMounted, trigger, containerProps } =
    usePopover(props)
  return (
    <>
      {trigger}
      {isMounted && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false} disabled={!isOpen}>
            <Container {...containerProps}>
              <Box shape={shape.box}>
                {content}
                <Arrow arrowRef={arrowRef} context={context} shape={shape.arrow} />
              </Box>
            </Container>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
