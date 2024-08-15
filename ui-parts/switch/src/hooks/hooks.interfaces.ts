export type OnChangeCallback = (checked: boolean) => void

export type UseSwitchStateResult = [boolean, (nextValue?: boolean | any) => void]
