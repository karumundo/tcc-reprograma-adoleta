const Guardian = require('./service/guardian/guardian');
const guardianController = require('./controller/guardianController/guardianController');
const fakerGuardians = require('./data-source/fakerGuardians');
const Babysitter = require('./service/babysitter/babysitter');
const babysitterControler = require('./controller/babysitterController');
const fakerBabysitter = require('./data-source/fakerBabysitter');
const Locality = require('./service/locality/locality');
const localityController = require('./controller/localityController');
const fakerLocality = require('./data-source/fakerLocality')

fakerGuardians.mockGuardians();
fakerBabysitter.mockBabysitters();

// -- GUARDIAN --

//LISTA DE GUARDIASN criada à partir do faker que, por sua vez, utiliza a função createGuardians
//console.log(guardianController.getAllGuardians());

//GET ONE GUARDIAN
console.log(guardianController.getGuardian(Guardian.guardians[2].name));

//PATCH GUARDIAN
/*
const updateGuardian = {
    ...Guardian.guardians[3], description:'Oi, eu sou o Goku'
};
console.log(guardianController.patchGuardian(updateGuardian));
*/

// DELETE GUARDIAN
/*
guardianController.deleteGuardian(Guardian.guardians[9]);
console.log('DEPOIS DE DELETAR')
console.log(guardianController.getAllGuardians());
console.log(guardianController.patchGuardian(updateGuardian));
console.log(Guardian.guardians);
*/

// - BABYSITTERS -

//LISTA DE BABYSITTERS criada à partir do faker que, por sua vez, utiliza a função createBabysitter
//console.log(Babysitter.babysitters);

//GET ONE BABYSITTER 
//console.log(babysitterControler.getBabysitter(Babysitter.babysitters[3].name));

//PATCH BABYSITTER
/*
console.log(babysitterControler.getBabysitter(Babysitter.babysitters[3].name));
 const updateBabysitter = {
   ...Babysitter.babysitters[3], description:'Oi, eu sou o Goku'
};
console.log(babysitterControler.patchBabysitter(updateBabysitter));
*/

// DELETE BABYSITTER
/*
console.log(Babysitter.babysitters);
babysitterControler.deleteBabysitter(Babysitter.babysitters[9])
console.log('DEPOIS DE DELETAR')
console.log(Babysitter.babysitters);
*/