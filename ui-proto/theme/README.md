# Применение

## `ThemeProvider` - единая база стилей для всех проектов

```tsx
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ThemeProvider as ProtoThemeProvider }   from '@atls-ui-proto/theme'
import { GlobalStyles }                          from './global.styles'
export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <ProtoThemeProvider theme={theme}>
      <EmotionThemeProvider children={children} />
    </ProtoThemeProvider>
  </>
)
```

## Self-host шрифты

В _theme_ проекта и во всех _энтрипоинтах_ добавить файл fonts.d.ts

```ts
declare module '*.ttf'
declare module '*.woff'
declare module '*.woff2'
declare module '*.eot'
declare module '*.otf'
```

Кастомные шрифты складывать в такую структуру:

```
└── src
    └── fonts
        ├── index.ts
        └── Roboto
            ├── Roboto-Regular.ttf
            └── Roboto-Bold.ttf

```

И экспортировать их как модули:

```tsx
fonts / index.ts

import robotoBold    from './Roboto/Roboto-Bold.ttf'
import robotoRegular from './Roboto/Roboto-Regular.ttf'

export { robotoRegular, robotoBold }
```

Добавить в `GlobalStyles`:

```typescript jsx
import { robotoRegular } from './fonts'
import { robotoBold }
import { robotoBold }    from './fonts'

export const GlobalStyle
s = () => (
  <Global
    styles={css`
        @font-face {
          font-family: 'Roboto-Regular';
          src: local('Roboto-Regular') url(${robotoRegular}) format('truetype');
        }

        @font-face {
          font-family: 'Roboto-Bold';
          src: local('Roboto-Bold') url(${robotoBold}) format('truetype');
        }
      `}
  />
)
```

Тип
для `format` [смотреть тут.](https://css-tricks.com/snippets/css/using-font-face-in-css/#aa-deepest-possible-browser-support)

Добавить `fonts.ts`

```
└── src
    └── theme
        ├── fonts.ts
        └── index.ts
```

```typescript
export const fonts = {
  primary: 'Roboto-Regular',
  secondary: 'Roboto-Bold',
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
      type: 'asset/resource',
      generator: {
        filename: 'static/media/fonts/[name][ext]',
      },
    })

    return config
  },
}
```
