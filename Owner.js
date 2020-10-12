class Owner extends Person {
    constructor(name) {
        super(name);
        this.employedList = new Array();
    }

    addEmployee(employee) {
        if (employee.isEmployee()) {
            console.log(`${employee.getName()} active`)
        } else {
            this.employedList.push(employee.getName());
            console.log(`${employee.getName()} has been added as employee`)
            employee.setStatusEmployed(true);
            this.greeting();
        }
    }

    showEmployeeList() {
        if (this.employedList.length) {
            console.log('List of Employee');
            console.log(this.employedList.join(' - '));
        } else {
            console.log('You dont have employee!')
        }
    }

    deleteEmployee(employee) {
        if (this.employedList.length) {

            if (employee.isEmployee()) {
                const checkEmployee = emp => emp != employee.getName();
                const newEmpList = this.employedList.filter(checkEmployee);
                this.employedList = newEmpList;
                employee.setStatusEmployed(false);
                console.log(`remove ${employee.getName()} has been successfully`)
            } else {
                console.log(`${employee.getName()} is not employee`)
            }

        } else {
            console.log("You dont have privileges");
        }
    }

    greeting() {
        super.greeting();
        console.log('Stay safe and keep healthy')
    }
}