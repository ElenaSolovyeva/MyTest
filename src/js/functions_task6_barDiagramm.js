'use strict';
console.log('test.js');

const test1 = [-3,-5,4,4,-3];
const test2 = [-1,7,-3,6,0,5,5,6,4,6,1,3,1,9,-5,6,-3,9,-4,8,6,-3,8,3,0,10,10,1,-3,2,3,9,-1,-2,-2,-5,3,0,5,10,5,3,-4,1,4,-3,8,3,-1,-5,10,10,3,-2,10,6,0,0,3,-5];

const barChart = (arg) => {
  const arr = [...arg];
  const [maxPositiveValue, maxNegativeValue] = [_.max(arr), _.min(arr)];

  const transformedArr = arr.map((current) =>
    (current > 0)
      ?
        _.concat(
          _.concat(_.times((maxPositiveValue - current), _.constant(' ')),
                   _.times(current, _.constant('*'))
                 ),
          _.times(Math.abs(maxNegativeValue), _.constant(' '))
        )

      :
        _.concat(
          _.times(maxPositiveValue, _.constant(' ')),
          _.concat(
            _.times(Math.abs(current), _.constant('#')),
            _.times((Math.abs(maxNegativeValue) - Math.abs(current)), _.constant(' '))
          )
        )
  );

  const columns = _.zip(...transformedArr);
  const result = columns.map((current) => current.join('')).join('\n');
  console.log(result);

  // const result = columns.map((current) => _.concat(current, '\n').join('')).join('');
  // const resultLength = result.length;
  //
  // console.log(result.slice(0, resultLength - 1));
};

barChart(test1);
