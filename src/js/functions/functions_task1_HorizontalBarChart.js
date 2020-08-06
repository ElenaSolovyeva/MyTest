'use strict';




const roll = () => Math.floor(Math.random() * Math.floor(6)) + 1;

const play = (roundsNumber, callback) => {
  const rounds = _.times(roundsNumber, callback);
  const sides = _.range(1, 7);
  const placeholder = '#';

  const result = sides.map((side) => {
    const count = rounds.filter((item) => item === side).length;
    const displayCount = (count !== 0) ? `${count}` : '';
    return `${side}| ${placeholder.repeat(count)} ${displayCount} `
  });

  console.log(result.join('\n'));
};

play(200, roll);
