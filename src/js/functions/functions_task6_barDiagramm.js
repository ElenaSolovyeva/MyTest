'use strict';
console.log('test.js');

const barChart = (numbers) => {
  const top = Math.max(0, ...numbers);
  const bottom = Math.min(0, ...numbers);

  const lines = numbers.map((number) => {
    const bar = number > 0 ? '*'.repeat(number) : '#'.repeat(number);
    const topSpace = ' '.repeat(top - Math.max(0, number));
    const bottomSpace = ' '.repeat(Math.min(0, number) - bottom);

    return [...topSpace, ...bar, ...bottomSpace];
  });

  const chart = _.zip(...transformedArr)
    .map((line) => line.join(''))
    .join('\n');

  console.log(chart);
};

// ***********************

const test1 = [-3,-5,4,4,-3];
const test2 = [-1,7,-3,6,0,5,5,6,4,6,1,3,1,9,-5,6,-3,9,-4,8,6,-3,8,3,0,10,10,1,-3,2,3,9,-1,-2,-2,-5,3,0,5,10,5,3,-4,1,4,-3,8,3,-1,-5,10,10,3,-2,10,6,0,0,3,-5];

barChart(test1);
