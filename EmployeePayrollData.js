class EmployeePayrollData{
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(id,name,salary,gender,startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    get id(){   return this.id; }

    set id(id){
        console.log("Setter called");
        this.id = id;
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",options);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary + ", start date= " + empDate + ", gender= " + this.gender;
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
let employeePayrollData2 = new EmployeePayrollData(15,"Rashmi",500000,"F",new Date(2020,03,01));
console.log(employeePayrollData.toString());
console.log(employeePayrollData2.toString());

employeePayrollData.name = "Jaanpal";
console.log(employeePayrollData.name);