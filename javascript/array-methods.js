const arr = [1,2,4,5,6,9,true,{name: "massmind"}];

// length
const arrLength = arr.length;
console.log(arrLength)

console.log(arr[0]) // shows first element
console.log(arr[arr.length - 1]) // shows last element

const fruits = ["apple", "banana", "orange", "mango"];
console.log(typeof fruits);
console.log(typeof fruits.toString())

console.log(fruits.join(" "))

console.log(fruits.pop());
console.log(fruits.shift());
console.log(fruits);

console.log(fruits.push("Kiwi"))
console.log(fruits.unshift("Guava"))
console.log(fruits);

// concat 
const thridArr = [0,0,0,0];
console.log(arr.concat(fruits, thridArr, "Massmind"))

const myArr = [[1,2],[3,5,[1,2,3]]];
console.log(myArr.flat());

const newArr = [1,2,3,4,5,6,7,8,9];
//splice & slice
console.log(newArr.slice(1,5))
console.log(newArr);
console.log(newArr.splice(0,4))
console.log(newArr)

console.log(newArr.reverse());











