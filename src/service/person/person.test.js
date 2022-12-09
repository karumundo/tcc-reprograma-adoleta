const Person = require('./person');

describe('Verify Person instantiation', ()=>{
    test('Check if name is a string', ()=>{
        const karu = new Person('Caroline Lima', '123@gmail.com');
        expect(typeof karu.name).toBe('string');
    });
});