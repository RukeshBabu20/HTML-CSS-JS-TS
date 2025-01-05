// set method;
// size, add, delete, clear, has
const arr = [1,2,3,1,2,3,2,1,3,1,2,3,1,2, 8,8,8,8,8,5,5,5,5,7,7]

const mySet = new Set(arr);
console.log(mySet);

console.log(mySet.size)
mySet.add(10);
mySet.delete(1)
console.log(mySet.has(20));
mySet.clear();

console.log(mySet)