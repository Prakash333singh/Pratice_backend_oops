// function add(num1:number,num2:number){
//     return num1 +num2;
// }
// const n1=10;
// const n2=20;
// console.log(add(n1,n2))

//object ,array,tuple,enum
// const person:{
//  firstName:string;
//  address:{
//     state:string,
//     city:string
//  };
//  skills:string[];
//  age:number
// }={
//     firstName:"prakash",
//     address:{
//         state:"uttarakhand",
//         city:"Nainital"
//     },
//     skills:["node","dsa","golang"],
//     age:23
// }

// console.log(person.address.city)

// let favouriteLanguage1:string[];
// favouriteLanguage1=["javascript","c++","go"]


// let favouriteLanguage2: any[];
// favouriteLanguage2 = ["javascript","c++", "go",1,2,true]

// enum Role{
//     ADMIN,
//     SUPERADMIN,
//     VIWER
// };

// const person:{
//     name :string;
//     role:Role
// }={
//    name:"adhikari",
//    role:Role.ADMIN
// }

// if (person.role === Role.ADMIN) {
//     console.log("admin")
// } else if (person.role === Role.SUPERADMIN) {
//     console.log("super admin")
// }

//union | pipe in typescript

function combination(num1:string | number ,num2:string|number){
    let result;
    if(typeof num1 ==="number" && typeof num2 ==="number"){
        result=num1+num2;
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        result = num1.toString() + num2.toString();
    }
    return result;
}

console.log(combination(12,34));
console.log(combination("adhikari","lodi"));

type User={
    name:string;
    age:number;
    skills:string[]
}

const user:User={
  name:"prakash",
  age:22,
  skills:["react","node"]
}

function greet(user:User){
    console.log(`hii,i'm ${user.name}`)
}

greet(user);