# Общее описание расширения
Данное расширение способно менять шрифт на случайный из заданного массива.

# Возможности расширения
Данное расширение добавляет одну команду "random-font.changeFont", называемую "Change Font Randomly". В результате её выполнения текущий шрифт меняется на случайный из заданного массива из 20 элементов(при желание есть возможность добавить ещё).

# Основные составляющие функции
## Массив Шрифтов
``` typescript
const fonts = [
  'Cascadia Code',
  'Consolas',
  'Courier New',
  'Fira Code',
  'JetBrains Mono',
  'Menlo',
  'Monaco',
  'Source Code Pro',
  'Ubuntu Mono',
  'Plushwie Font 1',
  'Letmeshowyou',
  'Wooper',
  'Hollow House Demo',
  'SDAsian',
  'Preschool',
  'Comunismo',
  'codex',
  'DIGIT LCD',
  'Merkur Cyrillic'
];
```

Массив "fonts" содержит перечень шрифтов, которыми оперирует данное расширение. При желании в данный массив можно добавить ещё шрифтов.

## Выбор случайного элемента массива
``` typescript
const randomIndex = Math.floor(Math.random() * fonts.length);
const newFont = fonts[randomIndex];
```

"const randomIndex" - переменная, генерирующая целое число от 0 до 19(размер массива - 1).
"const newFont" - переменая, хранящая переменную массива по индексу раннее сгенерированного числа.

## Установка соответствующего шрифта
``` typescript
vscode.workspace.getConfiguration().update('editor.fontFamily', newFont, vscode.ConfigurationTarget.Global);
vscode.window.showInformationMessage(`Font changed to: ${newFont}`);
```

В первой строке устанавливается выбранный шрифт и применяется ко всему VS Code. Вторая строка выводит сообщение о том, какой шрифт был установлен.
