export type InputElevation = 'default' | 'hover' | 'none' | 'pressed'

export interface InputVisualState {
  background: string
  border: string
  content: string
  elevation: InputElevation
}

export interface InputAppearanceStates {
  disabled: InputVisualState
  error: InputVisualState
  filled: InputVisualState
  focused: InputVisualState
  hover: InputVisualState
  unfilled: InputVisualState
}

export type InputAppearanceName = 'primary' | 'secondary'

export type InputAppearance = InputAppearanceName | InputAppearanceStates

export type InputAppearances = Record<InputAppearanceName, InputAppearanceName>
