// static ke ander new object (instance) ko create karne ki jarurat nhi hoti 
// class Department {
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
//     describe(this:Department){
//         console.log("Department",this.name);
//     }
// }

// const accounting=new Department("adhikari");
// accounting.name="lodi";
// accounting.describe();


///private ,public access modifier

// class Department{
//     // public name:string;
//     // private employees:string[];
//     constructor(public name:string,private employee :string[]){
//         this.name=name;
//         this.employee=[];
//     }
   
//     describe(this:Department){
//         console.log("Department",this.name)
//     }

//     addEmployee(emp:string){
//         this.employee.push(emp);
//     }
//     printEmployee(){
//         console.log("number of emp",this.employee.length)
//         console.log(this.employee)
//     }

// }

// const accounting=new Department("acccounting",[]);
// accounting.describe();

// accounting.addEmployee("adhikari");
// accounting.addEmployee("ayaush");
// accounting.addEmployee("yogesh");

// accounting.printEmployee();


///readonly
// class Deapartment{
//   private name:string;
//   private employees:string[];
//   private readonly id:string;
//   constructor(n:string){
//     this.name=n;
//     this.id="d2";//only once you can initialize
//     this.employees=[];
//   }

//   describe(this:Deapartment){
//     // this.id="d2";
//     console.log("Department",this.name);
//   }

//   addEmployee(emp:string){
//     this.employees.push(emp);
//   }

//   printEmployeeInformation(){
//     console.log("number of emp",this.employees.length);
//     console.log(this.employees);
//   }
// }


//inhertiance
//override properties & protected access modifier
//setter and getter method
class Department{
      name:string;
      protected employees:string[];
      private readonly id :string;
      constructor(id:string,n:string){
        this.name=n;
        this.id=id//only once u can initialize
        this.employees=[];
      }
      describe(this:Department){
        console.log(`Department ${this.id},${this.name}`)
      }
      addEmployee(emp:string){
        this.employees.push(emp);
      }

      printEmployeeInformation(){
          console.log('Number of emp: ', this.employees.length);
          console.log(this.employees);
      }
}

class AcccountingDepartment extends Department{
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }

    addReports(text: string) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }

    addEmployee(emp: string): void {
        if (emp === "Patel") {
            return;
        }
        this.employees.push(emp);
    }
    get getReports(){
        if(this.reports.length>0){
            return this.reports;
        }
        throw new Error("Report not found")
    }
    set setReports(value:string){
        if(!value){
            throw new Error("please pass valid date")
        }
        this.reports.push(value);
    }
}

const accDep = new AcccountingDepartment("d1", []);
accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe();

accDep.addEmployee("Patel");
accDep.addEmployee("Shivani");
// accDep.printEmployeeInformation();

// setter & getter
console.log("getter -> ", accDep.getReports);
accDep.setReports = "Code review error";
console.log("getter -> ", accDep.getReports);

//! static method

class Department2 {
    public name: string;
    protected employees: string[];
    private readonly id: string;
    constructor(id: string, n: string) { //  shorthand
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    describe(this: Department2): void {
        console.log(`Department (${this.id}), ${this.name}`);
    }

    addEmployee(emp: string) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log('Number of emp: ', this.employees.length);
        console.log(this.employees);
    }

    static getSalary() {
        return { salary: 500000 }
    }
}

const salary = Department2.getSalary(); //  without creating object, we can access by its class name
console.log(salary);


//! abstract classes

abstract class Department3 {
    name: string;
    protected employees: string[] = [];
    protected readonly id: string;

    constructor(id: string, n: string) {
        this.id = id;
        this.name = n;
    }
    abstract describe(this: Department3): void;
    abstract displayName(): void;
}

class Subclass extends Department3 {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }
    describe(): void {
        console.log("Department", this.id);
    }
    displayName(): void {
        console.log(this.name);
    }
}
const subClass = new Subclass("D1", []);
subClass.describe();
