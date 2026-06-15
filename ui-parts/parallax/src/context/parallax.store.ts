import type { MotionValue } from 'framer-motion'

interface StoreState {
  scrollY: MotionValue<number> | null
  windowHeight: number
}

type StoreListener = (state: StoreState) => void

export class ParallaxStore {
  private state: StoreState

  private listeners = new Set<StoreListener>()

  constructor(scrollY: MotionValue<number> | null, windowHeight: number) {
    this.state = {
      scrollY,
      windowHeight,
    }
  }

  get scrollY(): MotionValue<number> | null {
    return this.state.scrollY
  }

  get windowHeight(): number {
    return this.state.windowHeight
  }

  getState(): StoreState {
    return this.state
  }

  select(state: StoreState): void {
    this.state = state
    this.listeners.forEach((listener) => {
      listener(state)
    })
  }

  addListener(_event: 'changed', listener: StoreListener): void {
    this.listeners.add(listener)
  }

  removeListener(_event: 'changed', listener: StoreListener): void {
    this.listeners.delete(listener)
  }
}
