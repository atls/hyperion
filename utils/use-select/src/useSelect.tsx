import type { UseSelectProps }             from './interfaces.js'
import type { UseSelectReturn }            from './interfaces.js'

import { useMergeRefs }                    from '@floating-ui/react'
import { useSelect as useDownshiftSelect } from 'downshift'

import { useFloatingMenu }                 from '@atls-utils/use-float'

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
  const { refs, renderMenu } = useFloatingMenu({ open: select.isOpen, placement, offset })
  const referenceRef = useMergeRefs([refs.setReference, toggleButtonProps?.ref])
  const buttonProps = select.getToggleButtonProps({ ...toggleButtonProps, ref: referenceRef })
  const menuProps = select.getMenuProps(listProps, { suppressRefError: !select.isOpen })
  const getMenuItemProps = (item: string, index: number) => select.getItemProps({ item, index })
  return {
    ...select,
    labelProps: select.getLabelProps(),
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
  }
}
