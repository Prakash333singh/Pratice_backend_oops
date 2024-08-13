// let userName: string = "Prakash";
// let userNameArray: string[] = ["umar", "neetu", "rahul"]

// console.log(userName);

// typescript objects
// object shape of the entity
// entity- anything that have properties and action eg.car

// var car = {
//     company: "honda",
//     color: "black",
//     year: 2024,
//     isUsedCar: false,

//     //action ,methods
//     run: function () {

//     },
//     stop: (a: number, b: number) => {
//         return a + b;
//     }
// }

// console.log(car)

// how to define types in objects

// type CarType = {
//     company: string,
//     color: string,
//     isUsedCar: boolean,
//     year: number,
// }

// var car: CarType = {
//     company: "honda",
//     color: "black",
//     year: 2024,
//     isUsedCar: false,
// }

// var cars: CarType[] = [
//     {
//         company: "honda",
//         color: "black",
//         year: 2024,
//         isUsedCar: false,
//     },
//     {

//         company: "tyota",
//         color: "red",
//         year: 2024,
//         isUsedCar: true,
//     },
//     {
//         company: "kia",
//         color: "blue",
//         year: 2024,
//         isUsedCar: false,
//     }]

// for (let i = 0; i < cars.length; i++) {
//     car = cars[i];
//     console.log(car)
//     console.log(`Color:${cars[i].color},Company:${cars[i].company}`)
// }