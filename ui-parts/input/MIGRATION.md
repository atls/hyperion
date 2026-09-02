# Миграция Input 2.0

## Публичный API

| До 2.0                   | Начиная с 2.0                                                                    |
| ------------------------ | -------------------------------------------------------------------------------- |
| `Addon`                  | Передать содержимое через `leadingAddon` или `trailingAddon` компонента `Input`. |
| `Attachment`             | Удалён без замены в базовом пакете Input.                                        |
| `DividedFieldsContainer` | Удалён без замены в базовом пакете Input.                                        |
| `HiddenInput`            | Использовать нативный `<input type='hidden'>`.                                   |
| `RawInput`               | Использовать `Input`.                                                            |
| `TextareaContainer`      | Использовать `Textarea`.                                                         |
| `icon`                   | Передать иконку через `leadingAddon` или `trailingAddon`.                        |

## Стили Input

- `className` и `style` теперь применяются к контейнеру поля.
- Для нативного `input` используются `inputClassName` и `inputStyle`.
- `inputAppearances.blue` заменён на `inputAppearances.primary`.
- `inputAppearances.white` заменён на `inputAppearances.secondary`.
- `inputShapes.normal` заменён на `inputShapes.md`.
- Вместо `inputShapes.big` следует выбрать `inputShapes.lg` или другой подходящий размер.

## Стили Textarea

- `className` и `style` применяются к контейнеру поля.
- Для нативного `textarea` используются `textareaClassName` и `textareaStyle`.
