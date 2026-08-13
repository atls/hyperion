export interface Colors {
  action: ActionColors
  surface: SurfaceColors
  text: TextColors
  status: StatusColors
  elevation: ElevationColors
}

export interface ActionColors {
  base: string
  hover: string
  pressed: string
  disabled: string
  subtle: string
}

export interface SurfaceColors {
  base: string
  subtle: string
  muted: string
  soft: string
  inverse: string
}

export interface TextColors {
  primary: string
  secondary: string
  tertiary: string
  muted: string
  inverse: string
}

export interface StatusColors {
  success: string
  warning: string
  error: string
  info: string
}

export interface ElevationColors {
  xs: string
  sm: string
  md: string
  lg: string
}
