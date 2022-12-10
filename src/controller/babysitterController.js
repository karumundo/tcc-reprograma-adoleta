const Babysitter = require("../service/babysitter/babysitter");

function createBabysitter(name, email, password, description, period_price, quantity_children){
  const newBabysitter = new Babysitter(name, email, password, description, period_price, quantity_children);
  Babysitter.babysitters.push(newBabysitter);
  return `New user successfully created`;
};

function getAllBabysitters(){
  return Babysitter.babysitters
};

function getBabysitter (name){
  return Babysitter.babysitters.find((b)=>{
    return b.name === name
  });
};

function patchBabysitter (babysitter){
  const _babysitter = getBabysitter(babysitter.name);
  _babysitter.email = babysitter.email;
  _babysitter.password = babysitter.password;
  _babysitter.description = babysitter.description;
  _babysitter_children = babysitter.quantity_children
  return _babysitter
};

function deleteBabysitter (babysitter){
  const index = Babysitter.babysitters.indexOf(babysitter);
  Babysitter.babysitters.splice(index,1);
  return `User successfully delete`
};

module.exports = {createBabysitter, getAllBabysitters, getBabysitter, patchBabysitter, deleteBabysitter};
