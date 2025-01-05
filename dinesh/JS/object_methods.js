const person = {
    firstName: "John",
    lastName: "doe",
    fullName: function(){
        return "My Full name is " + this.firstName + ' ' + this.lastName;
    }
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName())