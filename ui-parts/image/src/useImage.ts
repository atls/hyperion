import type { ComponentPropsWithRef } from 'react'
import type { RefCallback }           from 'react'

import type { ImageProps }            from './interfaces.js'
import type { ImageLoadResult }       from './interfaces.js'

import { useCallback }                from 'react'
import { useState }                   from 'react'

import { useTheme }                   from '@atls-ui-parts/theme'

import { imageAppearances }           from './styles/appearance/variants.js'
import { imageShapes }                from './styles/shape/variants.js'

export const useImage = ({
  shape = imageShapes.default,
  appearance = 'default',
  isLoading = false,
  fallback,
  errorFallback,
  errorDescription = 'Failed to load image',
  loadingIndicator,
  containerProps,
  ref,
  onLoad,
  onError,
  ...nativeProps
}: ImageProps) => {
  const theme = useTheme()
  const colors = typeof appearance === 'string' ? imageAppearances[appearance](theme) : appearance
  const source = JSON.stringify([
    nativeProps.src,
    nativeProps.srcSet,
    nativeProps.sizes,
    nativeProps.crossOrigin,
    nativeProps.referrerPolicy,
  ])
  const [result, setResult] = useState<ImageLoadResult>()
  const requestState = result?.source === source ? result.state : 'loading'
  const hasSource = Boolean(nativeProps.src || nativeProps.srcSet)
  const state = hasSource ? requestState : 'empty'
  const busy = isLoading || state === 'loading'
  const imageRef = useCallback<RefCallback<HTMLImageElement>>(
    (image: HTMLImageElement | null) => {
      if (image?.complete) {
        const nextState = image.naturalWidth > 0 ? 'loaded' : 'error'
        setResult((previous) =>
          previous?.source === source && previous.state === nextState
            ? previous
            : { source, state: nextState })
      }
      if (typeof ref === 'function') return ref(image)
      if (ref) {
        ref.current = image
        return () => {
          ref.current = null
        }
      }
      return undefined
    },
    [source, ref]
  )
  return {
    shape,
    colors,
    state,
    busy,
    hasSource,
    fallbackContent: state === 'error' ? errorFallback : fallback,
    errorDescription,
    loadingIndicator,
    containerProps: {
      ...containerProps,
      role: state === 'loaded' || !nativeProps.alt ? containerProps?.role : 'img',
      'aria-label':
        state === 'loaded' ? containerProps?.['aria-label'] : nativeProps.alt || undefined,
      'aria-busy': busy || undefined,
      'data-state': state,
    },
    imageProps: {
      ...nativeProps,
      key: source,
      ref: imageRef,
      onLoad: (event) => {
        setResult({ source, state: 'loaded' })
        onLoad?.(event)
      },
      onError: (event) => {
        setResult({ source, state: 'error' })
        onError?.(event)
      },
    } satisfies ComponentPropsWithRef<'img'>,
  }
}
