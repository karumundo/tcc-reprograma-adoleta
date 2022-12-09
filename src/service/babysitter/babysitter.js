const Person = require('../person/person');

class Babysitter extends Person{
    #password
    constructor(name, email, password, description, period_price, quantity_children){
        super(name, email, password)
        this.description = description
        this.period_price = period_price
        this.quantity_children = quantity_children
    }
    static babysitters = [];

};


module.exports = Babysitter;
