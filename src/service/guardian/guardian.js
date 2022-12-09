const Person = require('../person/person');

class Guardian extends Person {
  #password;
  description;

  constructor ( name, email, password, description ){
    super(name, email);
    this.#password = password;
    this.description = description
  };
  
  static guardians = [];

};

module.exports= Guardian;
