class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
    return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe(){
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize}.`;
    }
}

const emp1 = new Employee("Shayna", "Health");
const emp2 = new Employee("Ryan", "Finance");
const mgr1 = new Manager("Thu", "HR", 5);
const mgr2 = new Manager("Truckly", "Security", 3);

class Company {
    constructor(){
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}

const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);
myCompany.listEmployees();