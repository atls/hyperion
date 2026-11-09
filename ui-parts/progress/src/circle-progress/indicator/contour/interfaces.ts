export interface ContourGeometry {
  x: number
  y: number
  width: number
  height: number
  radius: number
}

export interface ContourInterval {
  start: number
  end: number
}

export interface ContourPart {
  length: number
  point: (distance: number) => [number, number]
  arc?: number
}
