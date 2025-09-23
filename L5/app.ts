//interface- we write the represtation (blue print) inside the interface how that object will look like

interface Person{
   name :string;
   age:number;
   greet(text:string):void
}

// type Person={
// name: string;
// age: number;
// greet(text: string): void
// }

//type and interface have synatx only differece is if u want to make representation of any object use interface and if u want to use union combination of types then use type

//differnce b/w class and interface
//we can't initialise any thing in interface 
//interface does not have initialiser unlike class

let user :Person;

user={
    name:"Prakash",
    age:22,
    greet(text):void{
        console.log(`${text} ${this.name}`);
    }
}

console.log(user)