import type { MotionValue } from 'framer-motion'

import { EventEmitter }     from 'events'

interface StoreState {
  scrollY: MotionValue<number> | null
  windowHeight: number
}

export class ParallaxStore extends EventEmitter {
  private state: StoreState

  constructor(scrollY: MotionValue<number> | null, windowHeight: number) {
    super()

    this.setMaxListeners(50)

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
    this.emit('changed', state)
  }
}
