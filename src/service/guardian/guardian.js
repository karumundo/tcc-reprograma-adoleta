const Person = require('../person/person');

class Guardian extends Person {
  description;

  constructor ( name, email, password, description, quantity_children){
    super(name, email);
    this.password = password;
    this.description = description;
    this.quantity_children
  };
  
  static guardians = [];

};

module.exports= Guardian;
