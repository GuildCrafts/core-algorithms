export default function isConnectedGraph(graph) {
  let lastKey = null;
  let lastArray = null;
  let lastPrep = null;
  let currentKey = null;
  let currentArray = [];
  let currentPrep = [];
  let sum = 0;
  let flag = [];

  for (let key in graph) {
    if (lastKey === null) {
      lastKey = key;
      lastPrep = graph[key];
      lastPrep.push(key);
    }
    else if (lastKey !== null) {
      currentKey = key;
      currentPrep = graph[key];
      currentPrep.push(key);
    }

    for (let i = 0; i < currentPrep.length; i++) {
      for (let j = 0; j < lastPrep.length; j++) {
          if (currentPrep[i][0] === lastPrep[j][0]) {
            flag.push(1);
          }
          else {
            flag.push(0);
          }
      }
    }
    for (let i = 0; i < flag.length; i ++) {
      sum += flag[i];
    }

    if(currentPrep.length !== 0) {
      if (sum === 0) {
        return false;
      }
    }

    if(currentPrep.length !== 0) {
      lastKey = currentKey;
      lastArray = currentArray;
      lastPrep = currentPrep;
      currentArray = [];
      currentPrep = [];
      currentKey = null;
    }

    flag = [];
    sum = 0;
  }
  return true;
}
