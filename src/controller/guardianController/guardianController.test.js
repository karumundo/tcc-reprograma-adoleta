const Guardian = require('../../service/guardian/guardian');
const guardianController = require('./guardianController');
const fakerGuardians = require('../../data-source/fakerGuardians');
fakerGuardians.mockGuardians();


describe('Testando as funções do arquivo guardianController.test.js', ()=>{
    test ("createGuardian function", () => {
        const createGuardianTest = guardianController.createGuardian('Julia', 'julua@test.com', '1234', 'Mãe solo buscando outras para formação de grupo', 1);
        let conference = guardianController.getGuardian('Julia')
        expect(conference).toEqual({
            "description": "Mãe solo buscando outras para formação de grupo",
            "email": "julua@test.com",
            "name": "Julia",
            "password": "1234",
           "quantity_children": 1,
          })
    });
    test ("deleteGuardian function", () => {
        const deleteGuardianTest = guardianController.deleteGuardian(Guardian.guardians.name);
        let size = Guardian.guardians.length;
        expect(size).toEqual(10)
    });
});