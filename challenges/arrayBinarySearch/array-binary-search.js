
const findNum = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;

  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    
    if(num === arr[mid]){
      return mid;
    }

    if(num > arr[mid]){
      low = mid + 1;
    }

    if(num < arr[mid]){
      high = mid - 1;
    }

    else {
      return -1;
    }
  }
};

module.exports = { findNum };