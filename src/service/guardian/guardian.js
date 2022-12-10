const Person = require('../person/person');

class Guardian extends Person {
  description;

  constructor ( name, email, password, description ){
    super(name, email);
    this.password = password;
    this.description = description
  };
  
  static guardians = [];

};

module.exports= Guardian;
