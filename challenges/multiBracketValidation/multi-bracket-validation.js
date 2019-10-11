

function multiBracketValidation(input) {

  let pCount = 0;
  let bCount = 0;
  let sCount = 0;

  for(let i = 0; i <= input.length; i++) {
    if(input[i] === '(') {
      pCount++;
    }
    if(input[i] === ')') {
      pCount--;
    }
    
    if(input[i] === '[') {
      bCount++;
    }
    if(input[i] === ']') {
      bCount--;
    }
    if(input[i] === '{') {
      sCount++;
    }
    if(input[i] === '}') {
      sCount--;
    }
  }
  
  return (pCount === 0 && bCount === 0 && sCount === 0 ? true : false);
}

module.exports = {
  multiBracketValidation
};