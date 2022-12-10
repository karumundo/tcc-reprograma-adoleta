const Person = require('../service/person/person');
const Guardian = require('../service/guardian/guardian');
const guardianController = require('./guardianController');
const fakerGuardians = require('../data-source/fakerGuardians');
fakerGuardians.mockGuardians();

describe('Guardian class', ()=>{
    test ("Delete function", () => {
        const deleteGuardianTest = guardianController.deleteGuardian(Guardian.guardians.name);
        let size = Guardian.guardians.length;
        expect(size).toEqual(9)
    }) 
});