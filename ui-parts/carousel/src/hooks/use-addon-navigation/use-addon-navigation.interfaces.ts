export interface UseAddonNavigationResult {
  nextProp?: {
    show: boolean
    onClick: () => void
  }
  prevProp?: {
    show: boolean
    onClick: () => void
  }
}
