
const Person = require('../person/person');
const Guardian = require('./guardian');

describe('Guardian class', ()=>{
    test ("Check if the guardian is an instance of the Person class", ()=> {
        const guardian1= new Guardian();
        expect(guardian1).toBeInstanceOf(Person)
    });
});