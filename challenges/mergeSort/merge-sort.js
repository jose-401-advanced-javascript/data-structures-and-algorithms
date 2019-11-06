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
    mergeSort(left, right, arr);
  }
};

const merge = (left, right, arr) => {
  //DECLARE i <-- 0
  //DECLARE j <-- 0
  //DECLARE k <-- 0
};