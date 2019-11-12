const repeatedWord = str => {
  const newStr = str.toLowerCase().replace(/,/g, '');
  let obj = {};
  let wordArr = newStr.split(' ');

  for(let i = 0; i < wordArr.length; i++) {
    if(!obj[wordArr[i]]) obj[wordArr[i]] = 1;
    else return wordArr[i];
  }
};

module.exports = {
  repeatedWord
};