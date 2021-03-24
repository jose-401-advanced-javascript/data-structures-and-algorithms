const leftJoin = (table1, table2) => {
  const matchingKeys = table1.filter((key, i) => table2[i][0] !== key);
  const newTable = matchingKeys.map(pairs => {
    const antonym = table2.find(arr => arr[0] === pairs[0]);
    if(antonym === undefined) pairs.push(null);
    else pairs.push(antonym[1]);
    return pairs;
  });
  return newTable;
};

module.exports = { leftJoin };
