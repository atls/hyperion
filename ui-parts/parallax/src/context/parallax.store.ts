import { EventEmitter } from 'events'
import { MotionValue }  from 'framer-motion'

interface StoreState {
  scrollY: null | MotionValue<number>
  windowHeight: number
}

export class ParallaxStore extends EventEmitter {
  private state: StoreState

  constructor(scrollY: null | MotionValue<number>, windowHeight: number) {
    super()

    this.setMaxListeners(50)

    this.state = {
      scrollY,
      windowHeight,
    }
  }

  getState(): StoreState {
    return this.state
  }

  get scrollY(): null | MotionValue<number> {
    return this.state.scrollY
  }

  get windowHeight(): number {
    return this.state.windowHeight
  }

  select(state: StoreState) {
    this.state = state
    this.emit('changed', state)
  }
}
