const arr = [1,2,3,2,1,2,3,1,2,3,4,5] // 1,2,3,4,5

// new Set([]);

const mySet = new Set(arr);
// console.log(mySet);
mySet.add(6,9,3);
console.log(mySet);
console.log(mySet.has(50));
mySet.delete(1)
mySet.clear()
console.log(mySet)
mySet.add(10)
mySet.add(20)
console.log(mySet)
mySet.delete(20)
console.log(mySet)