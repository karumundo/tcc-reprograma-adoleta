const Person = require('../person/person');

class Babysitter extends Person{
    #password
    constructor(name, email, password, description, period_value, quantity_children){
        super(name, email, password)
        this.description = description
        this.period_value = period_value
        this.quantity_children = quantity_children
    }
};

const babys1 = new Babysitter ('Lourdes', 'll@gmail.com', '1234', '12 anos de experiência', 50, 5)
console.log(babys1);
module.exports = Babysitter;
