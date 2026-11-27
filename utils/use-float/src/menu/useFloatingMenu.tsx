import type { ReactNode }                from 'react'

import type { UseFloatingMenuProps }     from './interfaces.js'
import type { UseFloatingMenuReturn }    from './interfaces.js'

import { FloatingPortal }                from '@floating-ui/react'
import { autoUpdate }                    from '@floating-ui/react'
import { flip }                          from '@floating-ui/react'
import { offset as floatingOffset }      from '@floating-ui/react'
import { shift }                         from '@floating-ui/react'
import { size }                          from '@floating-ui/react'
import { useFloating }                   from '@floating-ui/react'
import { useTransitionStyles }           from '@floating-ui/react'

import { FLOATING_MENU_HEIGHT_PROPERTY } from './constants.js'
export const useFloatingMenu = ({
  open,
  placement = 'bottom-start',
  offset = 0,
  animation,
  className,
}: UseFloatingMenuProps): UseFloatingMenuReturn => {
  const { refs, floatingStyles, context } = useFloating({
    open,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingOffset(offset),
      flip(),
      shift(),
      size({
        apply: ({ availableHeight, elements }) => {
          elements.floating.style.setProperty(
            FLOATING_MENU_HEIGHT_PROPERTY,
            `${Math.max(0, availableHeight)}px`
          )
        },
      }),
    ],
  })
  const { isMounted, styles } = useTransitionStyles(context, animation ?? { duration: 0 })
  const renderMenu = (content: ReactNode): ReactNode => (
    <FloatingPortal>
      <div
        ref={refs.setFloating}
        className={className}
        hidden={!(animation ? isMounted : open)}
        inert={!open || undefined}
        style={{ ...floatingStyles, ...(animation ? styles : undefined) }}
      >
        {content}
      </div>
    </FloatingPortal>
  )
  return { refs, renderMenu }
}
