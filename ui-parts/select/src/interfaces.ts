import type { ComponentPropsWithRef } from 'react'
import type { HTMLAttributes }        from 'react'
import type { ReactNode }             from 'react'

import type { SelectOption }          from './option/interfaces.js'
import type { SelectAppearance }      from './styles/appearance/interfaces.js'
import type { SelectShape }           from './styles/shape/interfaces.js'
import type { selectAppearances }     from './styles/appearance/variants.js'

export interface SelectClassNames {
  container?: string
  trigger?: string
  value?: string
  indicator?: string
  menu?: string
  option?: string
}

export interface SelectProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'dangerouslySetInnerHTML' | 'defaultValue' | 'onChange'
> {
  options: Array<SelectOption>
  label: string
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  disabled?: boolean
  placeholder?: string
  shape?: SelectShape
  appearance?: SelectAppearance | keyof typeof selectAppearances
  indicator?: ReactNode
  renderOption?: (option: SelectOption) => ReactNode
  triggerProps?: Omit<
    ComponentPropsWithRef<'button'>,
    'children' | 'dangerouslySetInnerHTML' | 'disabled' | 'value'
  >
  menuProps?: Omit<ComponentPropsWithRef<'ul'>, 'children' | 'dangerouslySetInnerHTML'>
  classNames?: SelectClassNames
}

export type SelectBehaviorProps = Pick<
  SelectProps,
  | 'defaultValue'
  | 'disabled'
  | 'label'
  | 'menuProps'
  | 'onChange'
  | 'options'
  | 'triggerProps'
  | 'value'
> &
  Required<Pick<SelectProps, 'shape'>>
