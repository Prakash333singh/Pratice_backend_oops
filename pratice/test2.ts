// npm node packge manager is the default package manager for Node.js. It's a tool that helps developers manage and share reusable code modules or packages in their projects.

// console.log('before async code')
// async function dosomthing() {
//     console.log("hello");
// }
// setTimeout(dosomthing, 5000);

// console.log(dosomthing())

// type CarType = {
//     price: number,
//     color: string,
// }

// class car {
//     price: number = 0;
//     color: string = 'not defined'
//     constructor() {
//         console.log("heelllek constructor here")
//     }
//     print = () => {
//         console.log("haaanajiiii")
//     }
// }

// let carObj: {} = new car()

// let carA: CarType = new car();
// carA.color = "red";
// carA.price = 234;
// let carB: CarType = new car()
// console.log("car A", carA)
// console.log("car A", carB)

// console.log("before async ");
// let setTimeoutID: number = 0;
// setTimeoutID = setTimeout(() => {
//     console.log("setTimeout async");
// }, 1000)

// if (true) {
//     clearTimeout(setTimeoutID)
// }


console.log("before async code")

function PromiseFunction(resolve: any, reject: any) {
    //async
    if (false) {
        resolve("sucessfully async code excuted")
    }
    else {
        reject("something went wrong")
    }
}

const result = new Promise(PromiseFunction);

result.then((sucess) => {
    console.log("success", sucess)
}).catch((error) => {
    console.log(error)
})

console.log("after async code")