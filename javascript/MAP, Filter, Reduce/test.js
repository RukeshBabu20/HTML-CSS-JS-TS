
const numbers = [1,2,3,4,5]

const square = numbers.map(number => 
    number*number
);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers)

const person =[ {
    name: "John",
    age: 45,
    city: "Chennai"
},{
    name: "John2",
    age: 4,
    city: "Chennai"
}
]
const adult = person.filter(p => p.age > 21);
console.log(adult);

// Reduce method in js array
const reduce_arr = [1,2,3,4,5,98,12,421,4];
// Array.reduce(callback(accumulator, currentValue, CurrentIndex(optional), array(optional)),initialValue);

const sum_the_arr = reduce_arr.reduce((acc, cur)=>{
    return acc * cur;
})

// console.log(sum_the_arr)