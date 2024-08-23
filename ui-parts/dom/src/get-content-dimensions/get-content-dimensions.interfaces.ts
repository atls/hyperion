interface ContentDimensions {
  width: number
  height: number
}

export type GetContentDimensions = (element: HTMLElement) => ContentDimensions
