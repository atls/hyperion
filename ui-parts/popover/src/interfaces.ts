import type { UseFloatReturn }        from '@atls-utils/use-float'
import type { UseFloatProps }         from '@atls-utils/use-float'
import type { Placement }             from '@floating-ui/react'
import type { ComponentPropsWithRef } from 'react'
import type { HTMLAttributes }        from 'react'
import type { ReactElement }          from 'react'
import type { ReactNode }             from 'react'
import type { Ref }                   from 'react'

import type { ContainerProps }        from './container/interfaces.js'
import type { PopoverAppearance }     from './styles/appearance/interfaces.js'
import type { PopoverShape }          from './styles/shape/interfaces.js'
import type { popoverAppearances }    from './styles/appearance/variants.js'
export interface PopoverProps extends Pick<UseFloatProps, 'onOpenChange' | 'open'> {
  children: ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>
  content: ReactNode
  defaultOpen?: boolean
  placement?: Placement
  appearance?: PopoverAppearance | keyof typeof popoverAppearances
  shape?: PopoverShape
  contentProps?: Omit<ComponentPropsWithRef<'div'>, 'children' | 'dangerouslySetInnerHTML'>
}

export interface UsePopoverResult {
  content: ReactNode
  shape: PopoverShape
  context: UseFloatReturn['context']
  arrowRef: UseFloatReturn['arrowRef']
  isOpen: boolean
  isMounted: boolean
  trigger: PopoverProps['children']
  containerProps: ContainerProps & { 'data-transition': string }
}
