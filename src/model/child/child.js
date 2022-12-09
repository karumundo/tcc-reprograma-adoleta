const Person = require ('../person/person');

class Child extends Person{
    constructor (name, age, school, freePeriod){
        super (name)
        this.age = age
        this.school = school
        this.freePeriod = freePeriod
    }
};

//const c1 = new Child ('Bento', 12, 'Notre Dame', 'tarde');
//console.log(c1)

module.exports = Child;