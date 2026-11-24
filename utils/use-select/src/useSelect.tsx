import type { ReactNode }                  from 'react'

import type { UseSelectProps }             from './interfaces.js'
import type { UseSelectReturn }            from './interfaces.js'

import { FloatingPortal }                  from '@floating-ui/react'
import { autoUpdate }                      from '@floating-ui/react'
import { flip }                            from '@floating-ui/react'
import { offset as floatingOffset }        from '@floating-ui/react'
import { shift }                           from '@floating-ui/react'
import { useFloating }                     from '@floating-ui/react'
import { useMergeRefs }                    from '@floating-ui/react'
import { useSelect as useDownshiftSelect } from 'downshift'

export const useSelect = ({
  onChange,
  onSelectedItemChange,
  placement = 'bottom',
  offset = 0,
  toggleButtonProps,
  listProps,
  ...props
}: UseSelectProps): UseSelectReturn => {
  const select = useDownshiftSelect({
    ...props,
    onSelectedItemChange: (changes) => {
      onSelectedItemChange?.(changes)
      if (changes.selectedItem !== null) onChange?.(changes.selectedItem)
    },
  })
  const { refs, floatingStyles } = useFloating({
    open: select.isOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [floatingOffset(offset), flip(), shift()],
  })
  const referenceRef = useMergeRefs([refs.setReference, toggleButtonProps?.ref])
  const buttonProps = select.getToggleButtonProps({ ...toggleButtonProps, ref: referenceRef })
  const menuProps = select.getMenuProps(listProps, { suppressRefError: !select.isOpen })
  const getMenuItemProps = (item: string, index: number) => select.getItemProps({ item, index })
  const renderMenu = (menu: ReactNode): ReactNode => (
    <FloatingPortal>
      <div ref={refs.setFloating} hidden={!select.isOpen} style={floatingStyles}>
        {menu}
      </div>
    </FloatingPortal>
  )
  return {
    ...select,
    labelProps: select.getLabelProps(),
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
  }
}
