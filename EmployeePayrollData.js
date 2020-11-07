class EmployeePayrollData{
    _id;
    _name;
    _salary;
    _gender;
    _startDate;

    constructor(id,name,salary,gender,startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this._gender = gender;
        this._startDate = startDate;
    }

    get id(){   return this._id; }

    set id(id){
        if(id > 0)
            this._id = id;
        else throw "Employee id should be greater than zero";
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this._startDate === undefined ? "undefined" : this._startDate.toLocaleDateString("en-US",options);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this._salary + ", start date= " + empDate + ", gender= " + this._gender;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        if(salary > 0)
            this._salary = salary;
        else throw "salary shoud be greater than zero";
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        if(gender == "F" || gender == "M")
            this._gender = gender;
        else throw "Please enter valid gender";
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(startDate){
        if(startDate <= new Date())
            this._startDate = startDate;
        else throw "You entered start date sometime in future";
    }

    get name(){
        return this._name;
    }
    set name(name){
        const pattern = RegExp("[A-Z]{1}.{2,}");
        if(pattern.test(name))
            this._name = name;
        else throw "Name does not match the pattern";
    }
}

let employeePayrollData = new EmployeePayrollData(10,"Radhika",320000);
let employeePayrollData2 = new EmployeePayrollData(15,"Rashmi",500000,"F",new Date(2020,03,01));
console.log(employeePayrollData.toString());
console.log(employeePayrollData2.toString());
try{
    employeePayrollData2.name = "jaanpal";
}catch(e){
    console.error(e);
}
console.log(employeePayrollData2.toString());

try{
    employeePayrollData2.startDate = new Date(2020,04,1);
}catch(e){
    console.error(e);
}
console.log(employeePayrollData2.toString());

try{
    employeePayrollData2.gender = "Female";
}catch(e){
    console.error(e);
}
console.log(employeePayrollData2.toString());

try{
    employeePayrollData2.id = -3;
}catch(e){
    console.error(e);
}
try{
    employeePayrollData2.salary = -32000;
}catch(e){
    console.error(e);
}