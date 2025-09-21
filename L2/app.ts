//functions return type

// function add(num1:number,num2:number):number{
//     return num1+num2
// }

// console.log(add(10,20));


// function addHandle(num1:number,num2:number,cb:(n:number)=>void){
//    const result=num1+num2;
//    cb(result);
// }

// addHandle(10,20,(result:number)=>{
//     console.log(result);
// })


///classes and interfaces
// console.log("starting")
class Department1{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    describe(){
        console.log("department",this.name);
    }
}


const accouncting=new Department1("accounting")
accouncting.describe();

const accountingcopy={
    name:"adhikari",
    describe:accouncting.describe
}

accountingcopy.describe();
