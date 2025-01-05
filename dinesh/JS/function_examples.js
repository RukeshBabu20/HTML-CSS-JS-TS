// if (10=11) {
//     console.log('The age is 10')
// } else {
//     console.log('The age is not 10')
// }

function checkAge (age) {
    if(age>=10){
        return "Age is more than 10"
    }else{
        return "Age is less than 10"
    }
}

// console.log(checkAge(10))

// = assignment operator
// == checking values both left and right and return boolean value
// === checking values and types both left and right

function checkColors(color){
    if(color === 'blue'){
        return 'The sky is blue'
    } else if(color === 'red') {
        return 'The earth core is red'
    } else if( color === 'green'){
        return 'Leaves are green'
    } else {
        return 'I am not interested!!'
    }
}

// console.log(checkColors('red'))



function testNumbers (age){
    if (age>18 && age <45) {
        return 'Adult'
    } else if(age>45 && age<60){
        return 'Experienced'
    } else if(age>=60){
        return 'senior citizen'
    } else {
        return 'student';
    }
}
console.log(testNumbers(10))




//__________________________________

for (let i = 0; i<=10; i++){
    console.log(i);
}
