//  for loop
for (let i=2; i<=10; i++){
    console.log(i);
} // before hand if you know the number of iterations, use this.

// while loop
let count = 0;
while(count<50){
    console.log(count);
    count++
} // specific condition meet means use while loop

// do while loop

let i=0;

do{
    console.log(i);
    i++
}while(i<10); // alteast run the loop one time

// for in loop

const obj = {a:1, b:2, c:4}; // object method

for (let key in obj){
    console.log(key, obj[key])
}

//for of loop
 // array method
const arr = [10,20,30];

for (let value of arr){
    console.log(value);
}
//array method
//foreach loop
const foreachLoop = arr.forEach(ele => {
                        console.log(ele)
                    });



