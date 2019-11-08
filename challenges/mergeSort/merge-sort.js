//ALGORITHM Mergesort(arr)
const mergeSort = (arr) => {
  //DECLARE n <-- arr.length
  const n = arr.length;
  //if n > 1
  if(n > 1) {
    //DECLARE mid <-- n/2
    const mid = n / 2;
    //DECLARE left <-- arr[0...mid]
    const left = arr.slice(0, mid);
    //DECLARE right <-- arr[mid...n]
    const right = arr.slice(mid, n);
    //Mergesort(left)
    mergeSort(left);
    //Mergesort(right)
    mergeSort(right);
    //Merge(left, right, arr)
    merge(left, right, arr);
  }
};

const merge = (left, right, arr) => {
  //DECLARE i <-- 0
  let i = 0;
  //DECLARE j <-- 0
  let j = 0;
  //DECLARE k <-- 0
  let k = 0;
  //while i < left.length && j < right.length
  while(i < left.length && j < right.length) {
    //if left[i] <= right[j]
    if(left[i] <= right[j]) {
      //arr[k] <-- left[i]
      arr[k] = left[i];
      //i <-- i + 1
      i++;
    }
    else {
      //arr[k] <-- right[j]
      arr[k] = right[j];
      //j <-- j + 1
      j++;
    }
    //k <-- k + 1
    k++;
  }
  //if i = left.length
  if(i === left.length) {
    //set remaining entries in arr to remaining values in right
    while(j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  else {
    //set remaining entries in arr to remaining values in left
    while(i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
};

module.exports = {
  mergeSort
};