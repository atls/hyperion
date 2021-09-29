export type TooltipAnchor =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_CENTER'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'TOP_CENTER'
  | 'LEFT_BOTTOM'
  | 'LEFT_TOP'
  | 'LEFT_CENTER'
  | 'RIGHT_BOTTOM'
  | 'RIGHT_TOP'
  | 'RIGHT_CENTER'
  | 'CENTER'
export type TooltipTrigger = 'click' | 'hover' | 'menu'
export type TooltipCloseOnDisappear = 'partial' | 'full'
export type LayerDimensions = (layerSide: string) => {
  width: number
  height: number
}

export interface TooltipProps {
  text?: string | number
  trigger?: TooltipTrigger
  showArrow?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  anchor?: TooltipAnchor
  possibleAnchors?: TooltipAnchor[]
  closeOnOutsideClick?: boolean
  closeOnDisappear?: TooltipCloseOnDisappear
  triggerOffset?: number
  autoAdjust?: boolean
  fixed?: boolean
  scrollOffset?: number
  snapToAnchor?: boolean
  layerDimensions?: LayerDimensions
  animate?: boolean
  isOpen?: boolean
  container?: React.ReactElement
  children: React.ReactElement
}
