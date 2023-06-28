# Применение

## `ThemeProvider` - единая база стилей для всех проектов

```
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

```
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

```
export const fonts = {
  primary: 'Roboto-Regular'      // совпадает с fileName
}
```
