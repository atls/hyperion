'use client'

/* eslint-disable @next/next/no-img-element */
import type { ImageProps }      from './interfaces.js'
import { clsx }                 from 'clsx'

import { PlaceholderIcon }      from '@atls-ui-parts/icons'
import { CircleProgress }       from '@atls-ui-parts/progress'

import { containerStyles }      from './container/styles/base.css.js'
import { fallbackStyles }       from './fallback/styles/base.css.js'
import { fallbackIconStyles }   from './fallback/styles/base.css.js'
import { descriptionStyles }    from './fallback/styles/base.css.js'
import { loadingStyles }        from './loading/styles/base.css.js'
import { pictureStyles }        from './picture/styles/base.css.js'
import { imageAnimationStyles } from './styles/animation.css.js'
import { useImage }             from './useImage.js'

export const Image = (props: ImageProps) => {
  const {
    shape,
    colors,
    state,
    busy,
    hasSource,
    fallbackContent,
    errorDescription,
    loadingIndicator,
    containerProps,
    imageProps,
  } = useImage(props)
  return (
    <div
      {...containerProps}
      className={clsx(containerStyles, containerProps.className)}
      style={{
        width: imageProps.width ?? shape.container.width,
        height: imageProps.height ?? shape.container.height,
        borderRadius: shape.container.radius,
        ...containerProps.style,
      }}
    >
      <div
        aria-hidden='true'
        className={clsx(fallbackStyles, imageAnimationStyles)}
        style={{
          backgroundColor: colors.fallback.backgroundColor,
          paddingInline: shape.fallback.paddingInline,
          gap: shape.fallback.gap,
          color: state === 'error' ? colors.fallback.errorColor : colors.fallback.color,
        }}
      >
        {state !== 'loaded' &&
          (fallbackContent === undefined ? (
            <>
              <PlaceholderIcon className={fallbackIconStyles} height='auto' />
              {state === 'error' && errorDescription && (
                <span className={descriptionStyles} style={shape.fallback.typography}>
                  {errorDescription}
                </span>
              )}
            </>
          ) : (
            fallbackContent
          ))}
      </div>
      {hasSource && (
        <img
          {...imageProps}
          alt={imageProps.alt}
          data-loaded={state === 'loaded'}
          className={clsx(pictureStyles, imageAnimationStyles, imageProps.className)}
          style={{ ...shape.picture, ...imageProps.style }}
        />
      )}
      <div
        className={clsx(loadingStyles, imageAnimationStyles)}
        data-loading={busy}
        aria-hidden='true'
        style={{ backgroundColor: colors.loading.backgroundColor }}
      >
        {busy &&
          (loadingIndicator === undefined ? (
            <CircleProgress shape={shape.loading.progress} appearance={colors.loading.progress} />
          ) : (
            loadingIndicator
          ))}
      </div>
    </div>
  )
}
