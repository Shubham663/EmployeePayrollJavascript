class EmployeePayrollData{
    _id;
    _name;
    _salary;
    _gender;
    _startDate;

    constructor(id,name,salary,gender,startDate){
        this.id = id;
        this.name = name;
        this._salary = salary;
        this._gender = gender;
        this._startDate = startDate;
    }

    get id(){   return this._id; }

    set id(id){
        this._id = id;
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this._startDate === undefined ? "undefined" : this._startDate.toLocaleDateString("en-US",options);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this._salary + ", start date= " + empDate + ", gender= " + this._gender;
    }

    get name(){
        // console.log("getter called");
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