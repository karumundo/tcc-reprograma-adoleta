const Guardian = require('./service/guardian/guardian');
const guardianController = require('./controller/guardianController');
const fakerGuardians = require('./data-source/fakerGuardians');
fakerGuardians.mockGuardians();


console.log(guardianController.getAllGuardians());
//console.log(guardianController.getGuardian(Guardian.guardians[3].name));
/*const updateGuardian = {
    ...Guardian.guardians[3], description:'Oi, eu sou o Goku'
};*/
guardianController.deleteGuardian(Guardian.guardians[5]);
console.log(' depois de deletado ')
console.log(guardianController.getAllGuardians());

//console.log(guardianController.patchGuardian(updateGuardian));
//console.log(Guardian.guardians);