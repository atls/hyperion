export interface AvatarAppearanceStyles {
  backgroundColor: string | Function
  borderColor?: string | Function
  fontColor?: string | Function
}

export interface AvatarAppearanceBackgroundProps {
  background?: string
}

export interface AvatarAppearanceProps extends AvatarAppearanceBackgroundProps {}
