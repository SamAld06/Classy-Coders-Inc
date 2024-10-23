class Employee {
    #salary
    #isHired
    constructor(name, position, salary, isHired) {
        this.name = name
        this.position = position
        this.#salary = salary
        this.#isHired = isHired
    }
    getSalary() {
        return this.#salary
    }
    getStatus() {
        return this.#isHired
    }
    setSalary(amount) {
        this.#salary = amount
    }
    setStatus(command) {
        if (command == "hire") {
            this.#isHired = true
            return this.#isHired
        }else if (command == "fire") {
            this.#isHired = false
            return this.#isHired
        }else {
            return "Invalid command"
        }
    }


    
}

module.exports = {
    Employee,
}
