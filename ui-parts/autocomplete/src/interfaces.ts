import type { ListboxOption }           from '@atls-ui-parts/listbox'
import type { UseFloatingMenuReturn }   from '@atls-utils/use-float'
import type { ComponentPropsWithRef }   from 'react'
import type { HTMLAttributes }          from 'react'
import type { ReactNode }               from 'react'

import type { AutocompleteAnimation }   from './animation/interfaces.js'
import type { AutocompleteAppearance }  from './styles/appearance/interfaces.js'
import type { AutocompleteShape }       from './styles/shape/interfaces.js'
import type { autocompleteAppearances } from './styles/appearance/variants.js'
export type AutocompleteOption = ListboxOption
export type AutocompleteFilter = (
  options: ReadonlyArray<AutocompleteOption>,
  inputValue: string
) => ReadonlyArray<AutocompleteOption>
export interface AutocompleteClassNames {
  container?: string
  input?: string
  toggle?: string
  indicator?: string
  menu?: string
  option?: string
}
export interface AutocompleteProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'dangerouslySetInnerHTML' | 'defaultValue' | 'onChange'
> {
  'aria-label': string
  options: ReadonlyArray<AutocompleteOption>
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  inputValue?: string
  defaultInputValue?: string
  onInputChange?: (value: string) => void
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  loading?: boolean
  placeholder?: string
  indicator?: ReactNode
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  renderOption?: (option: AutocompleteOption) => ReactNode
  filterOptions?: AutocompleteFilter
  shape?: AutocompleteShape
  appearance?: AutocompleteAppearance | keyof typeof autocompleteAppearances
  animation?: AutocompleteAnimation
  inputProps?: Omit<
    ComponentPropsWithRef<'input'>,
    'aria-label' | 'defaultValue' | 'disabled' | 'placeholder' | 'size' | 'type' | 'value'
  >
  toggleProps?: Omit<ComponentPropsWithRef<'button'>, 'children' | 'disabled' | 'type'>
  menuProps?: Omit<ComponentPropsWithRef<'ul'>, 'children' | 'dangerouslySetInnerHTML'>
  classNames?: AutocompleteClassNames
}
export type AutocompleteBehaviorProps = Pick<
  AutocompleteProps,
  | 'aria-label'
  | 'defaultInputValue'
  | 'defaultOpen'
  | 'defaultValue'
  | 'disabled'
  | 'filterOptions'
  | 'inputProps'
  | 'inputValue'
  | 'loading'
  | 'menuProps'
  | 'onChange'
  | 'onInputChange'
  | 'onOpenChange'
  | 'open'
  | 'options'
  | 'toggleProps'
  | 'value'
> &
  Required<Pick<AutocompleteProps, 'animation' | 'shape'>>
export interface AutocompleteBehavior {
  inputProps: ComponentPropsWithRef<'input'>
  toggleProps: ComponentPropsWithRef<'button'>
  menuProps: ComponentPropsWithRef<'ul'>
  getOptionProps: (value: string, index: number) => ComponentPropsWithRef<'li'>
  renderMenu: UseFloatingMenuReturn['renderMenu']
  referenceRef: UseFloatingMenuReturn['refs']['setReference']
  options: ReadonlyArray<AutocompleteOption>
  selectedItem: string | null
  inputValue: string
  highlightedIndex: number
  keyboardNavigation: boolean
}
