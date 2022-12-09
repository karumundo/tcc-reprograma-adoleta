const Guardian = require("../service/guardian/guardian");

function createGuardian(name, email, password, description){
  const newGuardian = new Guardian(name, email, password, description);
  Guardian.guardians.push(newGuardian);
  return `New user successfully created`;
};

module.exports = createGuardian;
