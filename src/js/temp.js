'use strict';
console.log('temp');

const sortDeps = (tree, acc = { whiteNodes: [], greyNodes: [], blackNodes: []}) => {
  const keys = Object.keys(tree);
  const values = Object.values(tree);

  // Получаем список всех вершин графа и заносим их в массив "Белых" (не посещенных вершин);
  acc.whiteNodes = [...keys, ...values].flat();
  console.log(acc.whiteNodes);


  const result = acc.whiteNodes.reduce( (node) => {
    // Заносим текущий узел в список "Серых" и одновременно удаляем из списка белых:
    acc.greyNodes = acc.whiteNodes.splice(0, 1);
    // Проверяем, является ли вершина ключом объекта (то есть может ли потенциально иметь дочерние узлы):
    if (keys.includes(node)) {
      if (node)
      // Если ли у вершины есть дочерние узлы,
    }

    return acc;
  }, acc);

  return result;
};





const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log(sortDeps(deps1));
