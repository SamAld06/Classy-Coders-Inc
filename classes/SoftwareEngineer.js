const Employee = require('./Employee')
class SoftwareEngineer{
    #programmingLanguages
    constructor() {
        this.#programmingLanguages = []
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages
    }
    setProgrammingLanguages(language) {
        this.#programmingLanguages.push(language)
        return this.#programmingLanguages
    }



    
}

module.exports = {
    SoftwareEngineer,
}