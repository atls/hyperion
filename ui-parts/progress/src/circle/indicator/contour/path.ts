import type { ContourGeometry } from './interfaces.js'
import type { ContourInterval } from './interfaces.js'
import type { ContourPart }     from './interfaces.js'

import { CONTOUR_TOLERANCE }    from './constants.js'
import { QUARTER_TURN }         from './constants.js'

export const contourPath = (
  geometry: ContourGeometry,
  intervals: ReadonlyArray<ContourInterval>
): string => {
  const { x, y, width, height } = geometry
  if (width <= 0 || height <= 0) return ''
  const radius = Math.max(0, Math.min(geometry.radius, width / 2, height / 2))
  const line = (from: [number, number], to: [number, number]): ContourPart => {
    const length = Math.hypot(to[0] - from[0], to[1] - from[1])
    return {
      length,
      point: (distance) => [
        from[0] + ((to[0] - from[0]) * distance) / length,
        from[1] + ((to[1] - from[1]) * distance) / length,
      ],
    }
  }
  const arc = (cx: number, cy: number, angle: number): ContourPart => ({
    length: QUARTER_TURN * radius,
    arc: radius,
    point: (distance) => [
      cx + radius * Math.cos(angle + distance / radius),
      cy + radius * Math.sin(angle + distance / radius),
    ],
  })
  const right = x + width
  const bottom = y + height
  const parts = [
    arc(right - radius, y + radius, -QUARTER_TURN),
    line([right, y + radius], [right, bottom - radius]),
    arc(right - radius, bottom - radius, 0),
    line([right - radius, bottom], [x + radius, bottom]),
    arc(x + radius, bottom - radius, QUARTER_TURN),
    line([x, bottom - radius], [x, y + radius]),
    arc(x + radius, y + radius, Math.PI),
    line([x + radius, y], [right - radius, y]),
  ].filter((part) => part.length > CONTOUR_TOLERANCE)
  const perimeter = parts.reduce((sum, part) => sum + part.length, 0)
  if (perimeter <= CONTOUR_TOLERANCE) return ''
  return intervals
    .map((interval) => {
      let distance = interval.start * perimeter
      const end = interval.end * perimeter
      let path = ''
      while (distance < end - CONTOUR_TOLERANCE) {
        let local = ((distance % perimeter) + perimeter) % perimeter
        if (perimeter - local < CONTOUR_TOLERANCE) local = 0
        let offset = 0
        const part =
          parts.find((candidate) => {
            if (local < offset + candidate.length - CONTOUR_TOLERANCE) return true
            offset += candidate.length
            return false
          }) ?? parts[0]
        const start = Math.max(0, local - offset)
        const length = Math.min(part.length - start, end - distance)
        if (length <= CONTOUR_TOLERANCE) break
        if (!path) path = `M ${part.point(start).join(' ')}`
        const point = part.point(start + length).join(' ')
        path += part.arc ? ` A ${part.arc} ${part.arc} 0 0 1 ${point}` : ` L ${point}`
        distance += length
      }
      return interval.end - interval.start >= 1 - CONTOUR_TOLERANCE ? `${path} Z` : path
    })
    .join(' ')
}
