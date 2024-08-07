export const toArray = (symArray) => (Array.isArray(symArray) ? symArray : [symArray])

export const getGradientId = (strokeColor) => {
  const id: string[] = []

  toArray(strokeColor).forEach((color) => {
    if (Object.prototype.toString.call(color) === '[object Object]') {
      id.push(
        Object.keys(color).reduce((prev, current, index) => {
          if (index === 0) {
            return `${current}-${color[current]}`
          }
          return `${prev}-${current}-${color[current]}`
        }, '')
      )
    }
  })

  return id
}

export const getPathStyles = (
  offset,
  percent,
  strokeColor,
  strokeWidth,
  gapDegree = 0,
  gapPosition
) => {
  const radius = 50 - strokeWidth / 2
  let beginPositionX = 0
  let beginPositionY = -radius
  let endPositionX = 0
  let endPositionY = -2 * radius
  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius
      beginPositionY = 0
      endPositionX = 2 * radius
      endPositionY = 0
      break
    case 'right':
      beginPositionX = radius
      beginPositionY = 0
      endPositionX = -2 * radius
      endPositionY = 0
      break
    case 'bottom':
      beginPositionY = radius
      endPositionY = 2 * radius
      break
    default:
  }
  const pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
   a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
   a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`
  const len = Math.PI * 2 * radius

  const pathStyle = {
    stroke: strokeColor,
    strokeDasharray: `${(percent / 100) * (len - gapDegree)}px ${len}px`,
    strokeDashoffset: `-${gapDegree / 2 + (offset / 100) * (len - gapDegree)}px`,
    transition:
      'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
  }

  return {
    pathString,
    pathStyle,
  }
}
