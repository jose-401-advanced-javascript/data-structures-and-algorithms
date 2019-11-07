// ALGORITHM QuickSort(arr, left, right)
const quickSort = (arr, left, right) => {
  // if left < right
  if(left < right) {
    // DEFINE position <-- Partition(arr, left, right)
    let position = partition(arr, left, right);
    // QuickSort(arr, left, position - 1)
    quickSort(arr, left, position - 1);
    // QuickSort(arr, position + 1, right)
    quickSort(arr, position + 1, right);
  }

};  

  //ALGORITHM Partition(arr, left, right)
const partition = (arr, left, right) => {
    //DEFINE pivot <-- arr[right]
  let pivot = arr[right];
    //DEFINE low <-- left - 1
  let low = left - 1;
    //for i <- left to right do
  for(let i = left; i < right; i++) {
      //if arr[i] <= pivot
    if(arr[i] <= pivot) {
        //low++
      low++;
        //Swap(arr, i, low)
      swap(arr, i, low);
    }
  }
    //Swap(arr, right, low + 1)
  swap(arr, right, low + 1);
    //return low + 1
  return low + 1;
};
  //ALGORITHM Swap(arr, i, low)
const swap = (arr, i, low) => {
    // DEFINE temp;
  let temp;
    //temp <-- arr[i]
  temp = arr[i];
    //arr[i] <-- arr[low]
  arr[i] = arr[low];
    //arr[low] <-- temp
  arr[low] = temp;
};


module.exports = { quickSort };