const Employee = require('./Employee')
class SalesPerson{
    #totalSales
    constructor(clients) {
        this.clients = []
        this.#totalSales = 0
    }
    getSalesNumber() {
        return this.#totalSales
    }
    makeSale(amount) {
        this.#totalSales += amount
    }



    
}

module.exports = {
    SalesPerson,
}