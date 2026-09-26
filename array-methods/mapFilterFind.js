let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


// arr.map((item)=>{
//     console.log(item, end='')
// })
// 1. Capture the brand new array returned by filter
let newArr = arr.filter((item) => item !== 10);

console.log(newArr); // This will be missing 10
console.log(arr);    // This is still the original array (with 10)


let searchItem= arr.find((item)=> item===1);
console.log(searchItem)