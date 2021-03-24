const dateConversion = (str) => {
  const date = new Date(str);
  return date.toUTCString();
};

const str = '2020-05-31T22:43:44.110Z';

console.log(dateConversion(str));
