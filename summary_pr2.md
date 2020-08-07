## commander.js

**Опции** определяются с помощью метода ```option(  )```.
Каждая опция может иметь короткий флаг (один символ) и длинное имя, разделенное запятой, пробелом или вертикальной чертой ('|').


Объяснение, что такое [require](https://tuhub.ru/posts/javascript-moduli-rukovodstvo-dlya-nachinayushhih)  см. в конце

Не понятно в [разделе про популярные типы опций](https://github.com/tj/commander.js/#common-option-types-boolean-and-value)
- ```$ pizza-options -d``` как выполняется и откуда берется  ```pizza-options``` ?
- не пойму смысл абзаца
> *```program.parse(arguments)``` processes the ```arguments```, leaving any ```args``` not consumed by the program options in the ```program.args``` array.*

перевод вроде такой:
> *```program.parse(arguments)``` обрабатывает аргументы и заносит аргументы, не используемые опциями программы, в массив ```program.args```.*

Что это за аргументы, "не используемые опциями программы"? Зачем они заносятся в массив ```program.args```? Где этот массив потом используется?  


**description**  
Единственное упоминание нашла [здесь](https://github.com/tj/commander.js/#commands).  

Говорится, что функция определена в файле ```index.js```  
Вот что там есть:
```
/**
 * Set the description to `str`.
 *
 * @param {string} str
 * @param {Object} [argsDescription]
 * @return {string|Command}
 * @api public
 */

description(str, argsDescription) {
  if (str === undefined && argsDescription === undefined) return this._description;
  this._description = str;
  this._argsDescription = argsDescription;
  return this;
};
```
