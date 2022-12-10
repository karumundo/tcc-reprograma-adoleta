const Guardian = require("../service/guardian/guardian");

function createGuardian(name, email, password, description){
  const newGuardian = new Guardian(name, email, password, description);
  Guardian.guardians.push(newGuardian);
  return `New user successfully created`;
};
 
function getAllGuardians(){
  return Guardian.guardians
};

function getGuardian (name){
  return Guardian.guardians.find((g)=>{
    return g.name === name
  });
};

function patchGuardian (guardian){
  const _guardian = getGuardian(guardian.name);
  _guardian.email = guardian.email;
  _guardian.password = guardian.password;
  _guardian.description = guardian.description
  return _guardian
};

function deleteGuardian (guardian){
  const index = Guardian.guardians.indexOf(guardian);
  Guardian.guardians.splice(index,1);
  return `User successfully delete`
};

module.exports = {createGuardian, getAllGuardians, getGuardian, patchGuardian, deleteGuardian};