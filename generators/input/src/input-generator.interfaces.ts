export interface Scheme {
  background: string
  border: string
  font: string
}

export type InputColorSchemes = {
  [key: string]: {
    default: Scheme
    hover: Scheme
    focus: Scheme
    disabled: Scheme
    error: Scheme
    pressed: Scheme
    [key: string]: Scheme
  }
}
