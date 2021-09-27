export * from './use-async'
export * from './use-boolean'
export * from './use-click-outside'
export * from './use-debounce-trigger'
export * from './use-debounce'
export * from './use-fork-ref'
export * from './use-interval'
export * from './use-is-mounted'
export * from './use-on-mount'
export * from './use-state-array'
export * from './use-state-debounce'
export * from './use-state-history'
export * from './use-state-previous'
export * from './use-timeout'
export * from './use-timer'
export * from './use-update-effect'
export * from 'react-popper'
export * from 'use-double-tap'

import { useHotkeys } from 'react-hotkeys-hook'
import useResizeObserver from 'use-resize-observer'

export { useHotkeys, useResizeObserver }

export interface TypedMap<T = any> {
  [key: string]: T
}

export interface TypedFunction<A = any, R = void> {
  (arg: A): R
}

export interface TypedReturnFunction<R = any> {
  (): R
}

export type Optional<T> = {
  [P in keyof T]?: T[P]
}
