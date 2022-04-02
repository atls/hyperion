export interface Scheme {
  background: string
  font: string
  border?: string
}

export type ButtonColorSchemes = {
  [key: string]: {
    default: Scheme
    pressed: Scheme
    hover: Scheme
    disabled: Scheme
    [key: string]: Scheme
  }
}
