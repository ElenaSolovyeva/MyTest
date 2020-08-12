## commander.js

### Опции  
определяются с помощью метода ```option(  )```.
Каждая опция может иметь короткий флаг (один символ) и длинное имя, разделенное запятой, пробелом или вертикальной чертой ('|').


Объяснение, что такое [require](https://tuhub.ru/posts/javascript-moduli-rukovodstvo-dlya-nachinayushhih)  (объяснение в конце статьи).

Не понятно в [разделе про популярные типы опций](https://github.com/tj/commander.js/#common-option-types-boolean-and-value)
- ```$ pizza-options -d``` как выполняется и откуда берется  ```pizza-options``` ?
- не пойму смысл абзаца
> *```program.parse(arguments)``` processes the ```arguments```, leaving any ```args``` not consumed by the program options in the ```program.args``` array.*

перевод вроде такой:
> *```program.parse(arguments)``` обрабатывает аргументы и заносит аргументы, не используемые опциями программы, в массив ```program.args```.*

Что это за аргументы, "не используемые опциями программы"? Зачем они заносятся в массив ```program.args```? Где этот массив потом используется?  


### description   
Единственное упоминание нашла [здесь](https://github.com/tj/commander.js/#commands).  

Говорится, что функция определена в файле ```index.js```  
Вот что там есть:
```
/**
 * Set the description to `str`.  // Устанавливает описание в строке??
 *
 * @param {string} str
 * @param {Object} [argsDescription] // Этот параметр - объект, содержащий массив?
 * @return {string|Command} // Не понятно, что возвращается?
 * @api public
 */

description(str, argsDescription) {
  if (str === undefined && argsDescription === undefined) return this._description;
  this._description = str;
  this._argsDescription = argsDescription;
  return this;
};
```
Синтаксис совсем непонятен, классы мы еще не проходили


Еще непонятно// "Эта строчка приведена в документации без пояснений; непонятно, что такое process и argv"
// Есть такое: "The options can be accessed as properties on the Command object.", но что это за объект?
// Напрашивается мысль, что process - это объект, а argv - значения аргументов, но что это за аргументы?
program.parse(process.argv);

[прочитать по этой теме](https://nodejs.org/api/process.html#process_process_argv)
