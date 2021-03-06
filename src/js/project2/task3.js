'use strict';

// На данном этапе использую готовые объекты
const file1Properties = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};

const file2Properties = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};

// Создать массивы из ключей 2х объектов, объединить, отсортировать
const keys1 = Object.keys(file1Properties);
const keys2 = Object.keys(file2Properties);

const resultKeys = _.difference(keys1, keys2).concat(keys2).sort();

// Применить reduce, аккумулятор будет объектом,
// заносить в несго пары ключ-значения с обработкой, одинаковые значения или нет
// с добавлением "+" и "-" к названию ключа
const result = resultKeys.reduce((acc, key) => {
  const [newValue, oldValue] = ['+', '-'];

  if (!keys1.includes(key)) {
    acc = `${acc}
    ${newValue}${key}: ${file2Properties[key]},`; //
    return acc;
  }

  if (!keys2.includes(key)) {
    return `${acc}
    ${oldValue}${key}: ${file2Properties[key]},`;
  }

  if (file1Properties[key] === file2Properties[key]) {
    return `${acc}
     ${key}: ${file2Properties[key]},`;
  }

  return `${acc}
    ${oldValue}${key}: ${file1Properties[key]},
    ${newValue}${key}: ${file2Properties[key]},`;
}, '');


console.log(`{${result.slice(0, (result.length-1))}
}`);
