import type { Placement }                              from '@floating-ui/react'
import type { UseSelectReturnValue }                   from 'downshift'
import type { UseSelectGetItemPropsReturnValue }       from 'downshift'
import type { UseSelectProps as DownshiftSelectProps } from 'downshift'
import type { ReactNode }                              from 'react'
import type { ComponentPropsWithRef }                  from 'react'

export interface UseSelectProps extends DownshiftSelectProps<string> {
  onChange?: (nextValue: string) => void
  placement?: Placement
  offset?: number
  toggleButtonProps?: ComponentPropsWithRef<'button'>
  listProps?: ComponentPropsWithRef<'ul'>
}

export interface UseSelectReturn extends UseSelectReturnValue<string> {
  labelProps: ReturnType<UseSelectReturnValue<string>['getLabelProps']>
  buttonProps: ComponentPropsWithRef<'button'>
  menuProps: ComponentPropsWithRef<'ul'>
  getMenuItemProps: (item: string, index: number) => UseSelectGetItemPropsReturnValue
  renderMenu: (menu: ReactNode) => ReactNode
}
