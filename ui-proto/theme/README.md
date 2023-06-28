# Применение

## `ThemeProvider` - единая база стилей для всех проектов

```typescript jsx
import { ThemeProvider as ProtoThemeProvider } from '@atls-ui-proto/theme
import { GlobalStyles }  from './global.styles' // локальные стили под проект

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>
      <ProtoThemeProvider includeDefaultFonts={true} children={children} />
    </EmotionThemeProvider>
  </>
)
```

## `injectFontFaces` - self-host шрифты

Кастомные шрифты складывать в такую структуру:

```
└── src
    └── fonts
        ├── index.ts
        └── Roboto
            ├── index.ts
            └── Roboto-Regular.ttf
```

Добавить в `GlobalStyles`:

```typescript jsx
import { injectFontFaces } from '@atls-ui-proto/theme'
import * as fonts from './fonts'     // импортированные шрифты

export const GlobalStyles = () => {
  injectFontFaces([
    {
       src: fonts.RobotoRegular,     // импортированный файл как модуль
       fileExt: 'ttf',               // расширение файла
       fileName: 'Roboto-Regular',   // наименование файла
       weight: 400,                  // вес
    }
  ])

  return (...)
```

Добавить `fonts.ts`

```
└── src
    └── theme
        ├── fonts.ts
        └── index.ts
```

```typescript
export const fonts = {
  primary: 'Roboto-Regular'      // совпадает с fileName
}
```
Конфигурация NextJS:
```typescript
/* eslint-disable */
module.exports = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource'
    })

    config.resolve.alias['@emotion/react'] = require.resolve('@emotion/react')
    config.resolve.alias['@emotion/styled'] = require.resolve('@emotion/styled')
    config.resolve.alias['@emotion/css'] = require.resolve('@emotion/css')

    return config
  },
}
```
