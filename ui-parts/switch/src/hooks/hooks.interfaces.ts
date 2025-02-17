export type OnChangeCallback = (checked: boolean) => void

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseSwitchStateResult = [boolean, (nextValue?: any) => void]
