const { default: expect } = require('expect');
const Address = require('./Address');

describe('Villager class', ()=>{
    test('Instantiation quality', ()=>{
        const addressCamila = new Address (132, 'Rio Branco Avenue ')
        expect(addressCamila).toBeNull
    })
});