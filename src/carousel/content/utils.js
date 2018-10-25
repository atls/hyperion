export function contentWidth (el) {
  const style = window.getComputedStyle(el, null)
  const pleft = Number(style.getPropertyValue('padding-left').replace('px', ''))
  const pright = Number(style.getPropertyValue('padding-right').replace('px', ''))

  return el.clientWidth - pleft - pright
}

export function contentSize (el) {
  return { width: contentWidth(el), height: 'auto' }
}
