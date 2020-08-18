'use strict';

const sortDeps = (deps) => {
  const add = (acc, node) => {
    console.log(`ACC: `);
    console.log(acc);
    console.log(`Current node: ${node}`);
    const subDeps = deps[node] || [];
    console.log(`subDeps: ${subDeps}`);
    const subAcc = subDeps.reduce(add, []);
    console.log(`subAcc: ${subAcc}`);
    console.log(`return: `);
    console.log({ ...acc, ...subAcc, [node]: true });
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, {});
  return Object.keys(set);
};

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

const deps2 = {
  b: ['d'],
  c: ['d', 'e'],
  d: ['e'],
  e: []
};


console.log(sortDeps(deps2));
