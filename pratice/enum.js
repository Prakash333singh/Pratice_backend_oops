"use strict";
//enum
///inex 0 1 2
// enum COLORS { RED, GREEN, BLUE }
// const color: COLORS = COLORS.RED;
// console.log("color", color)
//output color 0
// enum USERROLE { ADMIN, USER }
// USERROLE[USERROLE.ADMIN]
// let newAdmin = {
//     role: USERROLE.ADMIN,
//     name: "Naveed",
// }
// let newUser = {
//     role: USERROLE.USER,
//     name: "Naveed",
// }
// if (newAdmin.role === USERROLE.ADMIN) {
//do somthing basic logic here 
// console.log("newAdmin", newAdmin)
// console.log("newUser", newUser)
// newAdmin { role: 0, name: 'Naveed' }
// newUser { role: 1, name: 'Naveed' }
// }
function swap(arr) {
    return [arr[1], arr[0]];
}
// const input: number[] = [10, 20];
const input = ["abc", "bshsh"];
// const answer: number[] = swap(input);
const answer = swap(input);
console.log("result", answer);
// in the same code i want to swap index 0 with index 1 in case of string and number ,boolean here come the concept generics
