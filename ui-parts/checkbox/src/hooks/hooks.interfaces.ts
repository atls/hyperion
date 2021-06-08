export type OnChangeCallback = (checked: boolean) => void

export type UseCheckStateResult = [boolean, (nextValue?: boolean | any) => void]
