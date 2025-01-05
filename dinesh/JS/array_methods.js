// objects - methods
// array - methods
// CRUD  - Create, Read, Update, Delete

const person = [1,2,3,4,5,6,7,8]

// 0 indexing

console.log(person.length)

// Modify array

person.push(100)
person.unshift(200)

person.pop();
person.shift();

// splice and slice
person.splice(3, 2) // start index, delete count, adding elements ( multiple )
// console.log(person.slice(3))
// console.log(person)

const arr1 = [1,2,3];
const arr2 = [4,5,6];


const newArray = arr1.concat(arr2,person);
console.log(newArray)
// console.log(newArray.sort((a,b)=>b-a))
console.log(newArray.reverse())



