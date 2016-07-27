# detect-file-type

> Модуль для определения типа файла по сигнатурам

## Get started

```js
  var detect = require('detect-file-type');

  detect.fromFile('./image.jpg', function(err, result) {
    
    if (err) {
      return console.log(err);
    }
    
    console.log(result); // { ext: 'jpg', mime: 'image/jpeg' }
  });
```

## API

### fromFile(filePath, bufferLength, callback)
Определение типа файла находящегося на диске
- `filePath` - путь к файлу
- `bufferLength` - необязательный параметр. Размер буфера в байтах начиная с начала файла. По умолчания равен 100. В случае если размер файла менее 100 байт будет равен размеру файла.
- `callback`
 
### fromBuffer(buffer, callback)
Определение типа файла находящегося на диске
- `buffer` - uint8array
- `callback`

### addSignature(siganture)
Добавляет новую сигнатуру для определения файла к уже существующим сигнатурам
- `signature` - сигнатура. Читайте секцию о создании собственных сигнатур ниже.

## Сигнатуры и создание собственных сигнатур






