const repeatedWord = str => {
  let obj = {};
  let wordArr = str.split(' ');

  for(let i = 0; i < wordArr.length; i++) {
    if(!obj[wordArr[i]]) obj[wordArr[i]] = 1;
    else return obj[wordArr[i]];
  }
};

module.exports = (
  repeatedWord
)