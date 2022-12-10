const Person = require('../service/person/person');
const Guardian = require('../service/guardian/guardian');
const guardianController = require('./guardianController');

describe('Guardian class', ()=>{
    test ("Delete function", () => {
        const deleteGuardianTest = guardianController.deleteGuardian();
        let tamanho = Guardian.guardians.length();
        expect(tamanho).toEqual(9)
    }) 
});