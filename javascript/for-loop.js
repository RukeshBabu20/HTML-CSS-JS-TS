
const arr = [1,2,3,4,5,98,87,86];


for (let i=0; i < arr.length; i++) {
    if(arr[i] <= 5){
        console.log(arr[i])
    }
}

for (let value of arr){
    console.log(value);
}

while(arr.length>=10){
    console.log('Condtion met')
}

do {
    console.log('test')
}while(arr.length>10){
    console.log('test1')
}

const person =[ {
    name: "John",
    age: 45,
    city: "Chennai"
},{
    name: "John2",
    age: 452,
    city: "Chennai"
}]

for (let key in person){
    console.log(key,'==============')
}
console.log(person)
for (let i=0; i<person.length; i++){
    console.log(person[i]);
    console.log(typeof person[i])
    console.log(person[i].name)
}

const str = "123,4342,3523";
