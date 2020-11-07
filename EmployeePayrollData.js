class EmployeePayrollData{
    id;
    name;
    salary;

    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get id(){   return this.id; }

    set id(id){
        console.log("Setter called");
        this.id = id;
    }

    toString(){
        return "id= " + this.id + ", name= " + this.name + " and salary= " + this.salary;
    }

    // set name(name){
    //     console.log("Setter called for " + this.name);
    //     this.name = name;
    // }

    // get name(){
    //     console.log("getter called");
    //     return this.name;
    // }
}

// let employeePayrollData = new EmployeePayrollData();
// employeePayrollData.id = 10;
// employeePayrollData.name = "Radhika";
// employeePayrollData.salary = 320000;
let employeePayrollData = new EmployeePayrollData(10,"Radhika",320000);
let employeePayrollData2 = new EmployeePayrollData(15,"Rashmi",500000);

console.log(employeePayrollData.toString());
console.log(employeePayrollData2.toString());

employeePayrollData.name = "Jaanpal";
console.log(employeePayrollData.name);