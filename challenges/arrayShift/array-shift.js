
const addFirst = (arr, num) => {
    for(let i = arr.length; i > 0; i--){
        arr[i] = arr[i - 1];
    }
   arr[0] = num;
   return arr;
}

console.log(addFirst([2, 3, 4], 1));
