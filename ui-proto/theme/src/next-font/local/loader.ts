let fontFromBuffer: any
// eslint-disable-next-line
try {
  const mod = require('../fontkit').default
  fontFromBuffer = mod.default || mod
} catch (err) {
  throw err
}

import type { AdjustFontFallback }           from '../types'
import type { FontLoader }                   from '../types'

import { promisify }                         from 'util'

import { getFallbackMetricsFromFontFile }    from './get-fallback-metrics-from-font-file'
import { pickFontFileForFallbackGeneration } from './pick-font-file-for-fallback-generation'
import { validateLocalFontFunctionCall }     from './validate-local-font-function-call'

const nextFontLocalFontLoader: FontLoader = async ({
  functionName,
  variableName,
  data,
  emitFontFile,
  resolve,
  loaderContext,
}) => {
  const {
    src,
    display,
    fallback,
    preload,
    variable,
    adjustFontFallback,
    declarations,
    weight: defaultWeight,
    style: defaultStyle,
  } = validateLocalFontFunctionCall(functionName, data[0])

  // Load all next-font files and emit them to the .next output directory
  // Also generate a @next-font-face CSS for each next-font file
  const fontFiles = await Promise.all(
    src.map(async ({ path, style, weight, ext, format }) => {
      const resolved = await resolve(path)
      const fileBuffer = await promisify(loaderContext.fs.readFile)(resolved)
      const fontUrl = emitFontFile(
        fileBuffer,
        ext,
        preload,
        typeof adjustFontFallback === 'undefined' || !!adjustFontFallback
      )

      // Try to load next-font metadata from the next-font file using fontkit.
      // The data is used to calculate the fallback next-font override values.
      let fontMetadata: any
      try {
        fontMetadata = fontFromBuffer?.(fileBuffer)
      } catch (e) {
        // eslint-disable-next-line
        console.error(`Failed to load font file: ${resolved}\n${e}`)
      }

      // Get all values that should be added to the @next-font-face declaration
      const fontFaceProperties = [
        ...(declarations ? declarations.map(({ prop, value }) => [prop, value]) : []),
        ['next-font-family', variableName],
        ['src', `url(${fontUrl}) format('${format}')`],
        ['next-font-display', display],
        ...(weight ?? defaultWeight ? [['next-font-weight', weight ?? defaultWeight]] : []),
        ...(style ?? defaultStyle ? [['next-font-style', style ?? defaultStyle]] : []),
      ]

      // Generate the @next-font-face CSS from the next-font-face properties
      const css = `@font-face {\n${fontFaceProperties
        .map(([property, value]) => `${property}: ${value};`)
        .join('\n')}\n}\n`

      return {
        css,
        fontMetadata,
        weight,
        style,
      }
    })
  )

  // Calculate the fallback next-font override values using the next-font file metadata
  let adjustFontFallbackMetrics: AdjustFontFallback | undefined
  if (adjustFontFallback !== false) {
    const fallbackFontFile = pickFontFileForFallbackGeneration(fontFiles)
    if (fallbackFontFile.fontMetadata) {
      adjustFontFallbackMetrics = getFallbackMetricsFromFontFile(
        fallbackFontFile.fontMetadata,
        adjustFontFallback === 'Times New Roman' ? 'serif' : 'sans-serif'
      )
    }
  }

  return {
    css: fontFiles.map(({ css }) => css).join('\n'),
    fallbackFonts: fallback,
    weight: src.length === 1 ? src[0].weight : undefined,
    style: src.length === 1 ? src[0].style : undefined,
    variable,
    adjustFontFallback: adjustFontFallbackMetrics,
  }
}

export default nextFontLocalFontLoader
