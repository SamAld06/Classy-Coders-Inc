const Employee = require('./Employee')
class Manager{
    #employeesManaged
    constructor(department) {
        this.department = department
        this.#employeesManaged = []
    }
    getEmployeesManaged() {
        return this.#employeesManaged
    }
    setEmployeesManaged(employee) {
        this.#employeesManaged.push(employee)
    }


    
}

module.exports = {
    Manager,
}