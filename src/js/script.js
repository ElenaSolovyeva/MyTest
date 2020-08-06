'use strict';
console.log('*********************************************************');
console.log();
console.log('script.js');
const isValidGroup = (group) => {
  const transformedGroup = Number(`0x${group}`);
  return !_.isNaN(transformedGroup);
};

const isValidIPv6 = (ip) => {
  if(ip.indexOf('::') !== ip.lastIndexOf('::')) {
  return false;
  }

  const isShort = ip.includes('::');

  const groups = ip.split('::').filter((group) => group !== '').flatMap((part) => part.split(':'));
  const length = isShort ? groups.length + 2 : groups.length;

  if (!isShort && length < 8 || length > 8) {
    return false;
  }

  return groups.every(isValidGroup);
};



// BEGIN

// _.union(array, [el])
// Creates an array of unique values, in order, from all of the provided arrays
// using SameValueZero for equality comparisons.
// _.union([2, 1, 2], [4, 2], [2, 1]); // => [2, 1, 4]

// customizer === настройщи
// The customizer is invoked with six arguments: (objValue, srcValue, key, object, source, stack).
const customizer = (array, el) => _.union(array, [el]);

// Arguments
//    object (Object): The destination object.
//    sources (...Object): The source objects.
//    customizer (Function): The function to customize assigned values.
const merge = (...dictionaries) => _.mergeWith({}, ...dictionaries, customizer);

console.log (
  merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  )
);

// END


// BEGIN
const getUsedSpace = (battleField) => battleField
  .reduce((acc, line) => acc + line.filter((item) => item === 1).length, 0);

const calcShipsCount = (battleField) => {
  let bigShipsCount = 0;
  let bigShipsSpace = 0;
  [battleField, _.zip(...battleField)].forEach((field) => field.forEach((line) => {
    const bigShips = line.join('').split(0).filter((ship) => ship.length > 1);
    bigShipsCount += bigShips.length;
    bigShipsSpace += bigShips.reduce((acc, bigShip) => acc + bigShip.length, 0);
  }));
  const smallShipsCount = getUsedSpace(battleField) - bigShipsSpace;
  return bigShipsCount + smallShipsCount;
};

// END

const field = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
];

const getUsedSpace2 = (battleField) =>
  battleField.reduce( (acc, line) => acc + line.filter( (item) => item === 1).length,
                       0
  );

const calcShipsCount2 = (battleField) => {
  let bigShipsCount = 0;
  let bigShipsSpace = 0;

  [battleField, _.zip(...battleField)].forEach( (field) => field.forEach( (line) => {
    const bigShips = line.join('').split(0).filter( (ship) => ship.length > 1);
    bigShipsCount += bigShips.length;
    bigShipsSpace += bigShips.reduce( (acc, bigShip) => acc + bigShip.length, 0 );
  }));

  const smallShipsCount = getUsedSpace2(battleField) - bigShipsSpace;

  return smallShipsCount + bigShipsCount;
  // , _.zip(...battleField)]);
};

console.log(calcShipsCount2(field));

// const displayHistogram = () => {
//   const placeholder = '###';
//   const possibleValues = [1, 2, 3, 4, 5, 6];
//
//   const throwsResult = [ 6,1,3,3,4,2,6,5,5,5,5,3,1,3,6,2,4,5,4,5,1,1,3,2,4,6,3,6,4,5,5,5];
//   console.log(throwsResult);
//
//   const groupedResult = possibleValues.map( (value) => {
//     const count = throwsResult.filter((current) => current === value).length;
//     const countPersent = Math.round(count * 100 / throwsResult.length);
//     const displayCount = (countPersent === 0) ? '' : `${countPersent}%`;
//     const row = `${value}--${'#'.repeat(count)} ${displayCount}`;
//     return row;
//   });
//
//   const maxScore = groupedResult.reduce( (acc, currentRow) => {
//     if (currentRow.length > acc) {
//       acc = currentRow.length;
//     }
//     return acc;
//     },
//     0
//   );
//
//   const paddedResult = groupedResult.map( (current) => current.padEnd(maxScore, '*'));
//   const transformedResult = paddedResult.map( (current) => current.split(''));
//
//   console.log(groupedResult);//.join('\n'))); .split(',')
// };
//
// displayHistogram();

// *** Изменяет значение "зазмер шрифта" взависимости от положения ползунка ***
let range = document.querySelector('.size-setting');
let texts = document.querySelectorAll('.text');
let textSize = document.querySelector('.pixels');

textSize.style.color = "blue";
textSize.style.padding = "0 5px 0 5px";
textSize.style.backgroundColor = "lightGrey";
textSize.style.borderRadius = "20%";

range.oninput = function () {
  textSize.textContent = range.value;

  for (let text of texts) {
    text.style.fontSize = range.value + 'px';
  }
};

// *** Изменяет тип поля "пароль" взависимости от статуса чекбокса ***
let password = document.querySelector('.password');
let showPassword = document.querySelector('#show-password');

showPassword.onchange = function () {
  if (showPassword.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};

// ****************************************************************************

// const dezimalToHex = (num) => {
//   const getHexUnder16 = (hex) => {
//     switch(hex) {
//       case(10):
//         return `A`;
//       case(11):
//         return `B`;
//       case(12):
//         return `C`;
//       case(13):
//         return `D`;
//       case(14):
//         return `E`;
//       case(15):
//         return `F`;
//       default:
//         return `${hex}`;
//     }
//   };
//
//   if (num < 16) {
//     console.log(`0${getHexUnder16(num)}`);
//     return `0${getHexUnder16(num)}`;
//   }
//
//   const [first, second] = [Math.floor(num / 16), num % 16];
//
//   console.log(`first: ${first}, second: ${second}`);
//   return `${getHexUnder16(first)}${getHexUnder16(second)}`;
// };
//
// console.log(`${dezimalToHex(250)}`);




// const styles = {
//   normal: 'color: black',
//   pink: 'color: #d14',
//   bold: 'font-weight: bold',
// };
//
// const printWithColors = () => (console.log('%cAnswer %c"yes" %cif %cgiven number is prime. Otherwise answer %c"no"',
//   styles.normal, styles.pink, styles.bold, styles.normal, styles.pink));
//
// printWithColors();
