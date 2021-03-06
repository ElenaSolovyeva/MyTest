Запуск с тестом  ```$ node tests/capitalize.test.js```

Достаточно написать ровно одну проверку, которая покрывает основной сценарий.
Дальше нужно смотреть на "пограничные случаи":
 - Работа с пустой строкой;
  - Обработка ```null```;
  - Деление на ноль (в большинстве языков вызывает ошибку)
 - Специфические ситуации для конкретных алгоритмов.

Ошибки типов входных данных тестировать не нужно!

## Утверждения (Asserts)
```
import { strict as assert } from 'assert';
import util from '../src/util.js';

assert(util() === {});
```

### Специализированные утверждения, заточенные под конкретные ситуации:
- проверка равенства ПО ССЫЛКЕ    
  ```
  assert.strictEqual(actual, expected)
  assert.strictEqual(capitalize('hello'), 'Hello');
  ```

- для сравнения ПО ЗНАЧЕНИЮ  
  ```
  assert.deepStrictEqual(actual, expected)  
  assert.deepStrictEqual({ key: 'value' }, { key: 'value' });
  ```  


## Библиотека power-assert
```
import assert from 'power-assert';
import util from '../src/util.js';

assert(util() === {});
```

## framework JEST
[Настройка и запуск](https://ru.hexlet.io/courses/js-testing/lessons/jest/theory_unit)  

Для тестов Jest предоставляет две глобальные функции: ```test``` и ```expect```.   
Они доступны без какого-либо импорта.

Функция ```test``` принимает первым параметром произвольную строчку, которая должна описывать сам тест.   
Второй параметр — функция, внутри которой описан проверочный код,этот код не выполняется сразу.  

**Jest** использует "матчеры" (*matchers*). Это *утверждения*, имеющие особую структуру, напоминающую обращение к объекту.

- Проверка равенства по ссылке
```
expect([1, 2]).toBe([1, 2]); // false
```

- Проверка равенства по значению
```
expect([1, 2]).toEqual([1, 2]); // true
```

- матчер для проверки размера массива: в ```expect``` передаётся *сам массив*, а не его длина
```
expect(take(data)).toHaveLength(2);
```

- к любому матчеру можно применить модификатор ```not```, который инвертирует поведение матчера.  


**Если в коде возникла ошибка, для которой не было теста,**  
**то сначала напишите тест, который воспроизводит эту ошибку,**
**и затем уже чините её.**  

## Подготовка данных  

Данные для тестирования (например массивы или объекты) лучше *выносить на уровень модуля* вне тестовых функций.  
Это работает только в рамках одного модуля; подобную коллекцию всё равно придётся определять в каждом тестовом модуле.
Изменение этой коллекции почти наверняка приведёт к поломке большинства тестов, которые завязаны на количество элементов и их значения.  

Но далеко не всегда можно выносить константы на уровень модуля.  
В первую очередь это касается динамических данных (например ```Date.now()```).  

**Модуль загружается в память ровно один раз!**  
**Между загрузкой модуля и отработкой тестов проходит неопределённое время.**  

Решение:  **хуки** — специальные функции, которые запускаются до или после тестов.
```
let now;

// Запускается перед каждым тестом
beforeEach(() => {
  now = Date.now(); // текущий timestamp
});
```

## Типичные ошибки

- *Взаимное влияние:* тесты не должны влиять друг на друга;  
- *Условные конструкции:* в тесте их быть не должно;  
- *Тест вне тестов:* ```beforeEach``` готовит данные, а ```test``` — вызывает код, который тестируется, и проводит проверки;    
- *Слишком сильная детализация:* вместо одного теста со всеми необходимыми проверками программист создаёт 5 тестов, в каждом из которых ровно одна проверка;  
- *Глубокая вложенность* при использовании [группировки в блоки](https://ru.hexlet.io/courses/js-testing/lessons/bad-practice/theory_unit) ```describe```.

{\n  -follow: false\n   host: hexlet.io\n  -proxy: 123.234.53.22\n  -timeout: 50\n  +timeout: 20\n  +verbose: true\n}
