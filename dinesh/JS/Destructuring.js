const person = {
    name: 'John',
    age: 40,
    employed: true,
    address: {
        pin: 642912,
        email: 'john@gmail.com',
    },
    personal_details: {
        phone: 9879879878
    }
}

// name

console.log(person.name)
console.log(person.age)
console.log(person.address.email)
console.log(person.personal_details.phone)

const {employed, age, address} = person;
console.log(employed)
console.log(age)
console.log(address)

const {pin, email} = address;
console.log(email)


const arr = [1,2,3,'test',{test_data: 'dummy'}];
console.log(arr[4].test_data)

const {test_data} = arr[4]
console.log(test_data)



//_____________________________

/*

1. camel case = firstNameFullName;
2. snake case = first_name;
3. pascal case = FirstName

*/