import { SVGProps } from 'react'

export interface BaseIconProps {
  spin?: boolean
}

export type IconProps = SVGProps<SVGSVGElement> & BaseIconProps
