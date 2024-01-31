# LOCALES-GENERATOR

Скрипт для автоматической генерации переводов `react-inl`.

Создаёт на уровне энтрипоинта `locales/[localName].json` файл, содержащий все переводы энтрипоинта на основе `id` и `defaultMessages`

Для работы обязательно указывать в `formatMessage` или `FormattedMessage` уникальный `id` и текст перевода в `defaultMessages`.

Пример валидного компонента:

```html
 <Hello
   hello={formatMessage({ id: 'app.home_page.hello', defaultMessage: 'HELLO FROM HOME' })}
 />
 <Text>
   <FormattedMessage id='app.home_page.content' defaultMessage='CONTENT' />
 </Text>
```

---

## Установка

Устанавливаем на уровне энтрипоинта: `yarn add -D @atls-ui-generators/locales`

## Запуск

Для запуска необходимо добавить скрипты в `package.json` ентрипоинта.

Пример скриптов:

```json
{
  "scripts": {
    "generate-locales": "generate-locales ../../fragments ../../pages --out=en",
    "postinstall": "run generate-locales"
  }
}
```

### Входные аргументы

`generate-locales` принимает следующие аргументы:

1. **componentPaths** - Относительный список путей от `package.json` энтрипоинта по которым будет производится поиск переводов \*_необязательный_.
   - Принимается неограниченное кол-во аргументов. "generate-locales path1 path2 ...pathN"
   - Если не указать **componentPaths** , скрипт будет проходить по фрагментам и страницам текущего энтрипоинта
2. **localName** - Название локали \*_необязательный_.
   - Указывается после `-out=`
   - Если не указывать **localName**, то умолчанию берётся локаль `ru`

---

# Changelog

---
