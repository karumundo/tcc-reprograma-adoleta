const Person = require('../person/person');

class Guardian extends Person {
    #password;
    /*constructor (name, email, password){
        super (name, email)
        this.#password=password;
    };*/

    registerGuardian(name, email, password){
        super (name, email)
        this.#password=password;

            return "Guardian was registered with successful."
        }
     totalGuardians = [];
};

const novoG = register.super.Guardian(name, email);


//const p1 = new Guardian ('Camila', 'camila@gmail.com', '12345');
//console.log(p1)

module.exports= Guardian;
