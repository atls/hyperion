import { EventEmitter } from 'events'

import { ThemeMode }    from './theme-mode.interfaces'

export class ThemeModeStore extends EventEmitter {
  // TODO: fix storybook compilation
  // private mode: ThemeMode

  constructor(mode: ThemeMode = 'dark') {
    super()

    // @ts-ignore
    this.mode = mode
  }

  public getCurrent() {
    // @ts-ignore
    return this.mode
  }

  public set(mode: ThemeMode) {
    // @ts-ignore
    this.mode = mode

    this.emit('change', mode)
  }
}
