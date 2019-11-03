const insertionSort = (arr) => {
  //For i = 1 to arr.length
  for(let i = 1; i < arr.length; i++) {
    //int j <-- i - 1
    let j = i - 1;
    //int temp <-- arr [i]
    let temp = arr[i];
    //While j >= 0 and tem < arr[j]
    while(j >= 0 && temp < arr[j]) {
      //arr[j + 1] <-- arr[j]
      arr[j + 1] = arr[j];
      //j <-- j- 1
      j--;
    }
    //arr[j + 1] <-- temp
    arr[j + 1] = temp;
  }
};

module.exports = { insertionSort };