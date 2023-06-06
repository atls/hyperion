# Применение

## `ThemeProvider` - единая база стилей для всех проектов
```
import { ThemeProvider as ProtoThemeProvider } from '@atls-ui-proto/theme
import { GlobalStyles }  from './global.styles' // локальные стили под проект

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>
      <ProtoThemeProvider children={children} />
    </EmotionThemeProvider>
  </>
)
```

## `injectFontFaces` - self-host шрифты

Кастомные шрифты складывать в такую структуру:
```
| src
 L fonts
  L Roboto /* наименование шрифта */
   L Roboto-Regular.ttf /* файлы со стилями шрифтов */
```
Добавить в `GlobalStyles`:

```
import { injectFontFaces } from '@atls-ui-proto/theme'

export const GlobalStyles = () => {
  injectFontFaces([
    { 
      family: 'Roboto', /* название папки с шрифтами */
      type: 'Regular',  /* тип шрифта, совпадает с наименованием файла после "-" */
      weight: 400 
    }])
```
