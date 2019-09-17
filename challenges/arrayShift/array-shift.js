
const reverseArray = array => {
    let first = '';
    let last = '';
    for(let i = 0; i <= array.length / 2; i++) {
        first = array[i];
        last = array[array.length - 1 - i];
        array[array.length - 1 - i] = first;
        array[i] = last;
    }
}