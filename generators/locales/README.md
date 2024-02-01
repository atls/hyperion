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

1. Устанавливаем на уровне энтрипоинта: `yarn add -D @atls-ui-generators/locales`
2. Добавляем в корневой `package.json` проекта следующий скрипт:
   ```json
   {
     "scripts": {
       "postinstall": "yarn workspaces changed foreach --parallel run generate-locales"
     }
   }
   ```
3. Вносим изменения в энтрипоинты и вызываем `yarn postinstall` из корня проекта. 

_* достаточно изменить хотя бы один компонент, например фрагмент, в каждом энтрипоинте_
___
## Запуск

Вызов `yarn postinstall` из корня проекта вызовет генерацию переводов для энтрипоинтов, если в них произошли изменения.

Вызов `yarn generate-locales` из энтрипоинта вызовет генерацию для исходного энтрипоинта. 

После успешной генерации в проекте должны сгенерироваться папки `locales`, содержащие актуальные переводы.

### Входные аргументы

`generate-locales` принимает следующие аргументы:

1. **componentPaths** - Относительный список путей от `package.json` энтрипоинта по которым будет производится поиск переводов \*_необязательный_.
   - Принимается неограниченное кол-во аргументов. "generate-locales path1 path2 ...pathN"
   - Если не указать **componentPaths** , скрипт будет проходить по фрагментам и страницам текущего энтрипоинта
2. **localName** - Название локали \*_необязательный_.
   - Указывается после `-out=`
   - Если не указывать **localName**, то умолчанию берётся локаль `ru`

Если необходимо вызвать скрипт с параметрами отличными от исходных, то в энтрипоинт необходимо добавить новый скрипт.

Пример расширенного скрипта:

```json
{
  "scripts": {
    "generate-locales": "generate-locales ../test-folder --out=en"
  }
}
```

---

# Changelog

---
