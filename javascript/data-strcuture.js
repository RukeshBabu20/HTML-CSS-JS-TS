// // string;

// const demoString = "Hello world!";
// console.log(demoString);

// const demoNumber = 20;
// console.log(demoNumber);

// const demoBoolean = true; //false
// console.log(demoBoolean);

const details = {
    name: "massmind",
    location: "chennai",
    time: 7,
    active: true,
    address: {
        buildNo: 14,
        pincode: 621328,
        personal: {
            email: "sxya@gmail.com",
            mobile: 7653274576
        }
    }
}


const email1 = details.address.personal.email;

const {address} = details;
const {personal} = address;
const {email} = personal;

console.log(email);



// const arr = ["Hello world!",20,false, {name:"massming"},[true, 80]] //unordered list of collection
// console.log(arr);
