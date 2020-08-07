## commander.js

**Опции** определяются с помощью метода ```option(  )```.
Каждая опция может иметь короткий флаг (один символ) и длинное имя, разделенное запятой, пробелом или вертикальной чертой ('|').


Объяснение, что такое [require](https://tuhub.ru/posts/javascript-moduli-rukovodstvo-dlya-nachinayushhih)  см. в конце

Не понятно в [разделе про популярные типы опций](https://github.com/tj/commander.js/#common-option-types-boolean-and-value)
- ```$ pizza-options -d``` как выполняется и откуда берется  ```pizza-options```  
- абзац
> *```program.parse(arguments)``` processes the ```arguments```, leaving any ```args``` not consumed by the program options in the ```program.args``` array.*  

перевод вроде такой:
```
program.parse(arguments)
```
обрабатывает аргументы и заносит аргументы, не используемые опциями программы, в массив ```program.args```.
