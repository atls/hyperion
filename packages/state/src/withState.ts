import { createElement, forwardRef } from 'react'

export const withState = (stateHooks = []) => Target =>
  forwardRef((props, ref) => {
    const state = stateHooks.reduce((result, hook) => ({ ...result, ...hook() }), {})

    return createElement(Target, {
      ...state,
      ...props,
      ref,
    })
  })
