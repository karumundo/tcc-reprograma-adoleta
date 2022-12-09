const Guardian = require("../service/guardian/guardian");

function createGuardian(name, email, password, description){
  const newGuardian = new Guardian(name, email, password, description);
  console.log(newGuardian);
  Guardian.guardians.push(newGuardian);
  console.log(Guardian.guardians);

  return `New user successfully created`;
}

console.log(createGuardian('luzia', 'luzia@ll.c', 'abc123', 'blavlablalalal'));
