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

// function swap<T>(arr: T[]): T[] {
//     return [arr[1], arr[0]];
// }

// const input: number[] = [10, 20];
// const input: string[] = ["abc", "bshsh"];
// const answer: number[] = swap(input);
// const answer: string[] = swap<string>(input);
// console.log("result", answer);

// in the same code i want to swap index 0 with index 1 in case of string and number ,boolean here come the concept generics


// type StudentTypeA = {
//     name: string,
//     email: string
// }

// type StudentTypeB = {
//     age: number,
//     email: string;
// }

// function sortedStudents<T>(arr: T[]): T[] {
//     return arr;
// }

// sortedStudents<StudentTypeA>([{ name: "Naveed", email: "naveed@123" }])


// sortedStudents<StudentTypeB>([{ age: 2, email: "naveed@13" }])

//interface is for both scalar and object
//type is only for scalar

interface StudentTypeC {
    rollNo: number,
    email: string
}

type A = number | null;

interface StudentTypeD {
    rollNo: number,
    email: string
}


