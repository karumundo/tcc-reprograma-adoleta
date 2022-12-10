const { default: expect } = require('expect');
const Locality = require('./locality');

describe('Villager class', ()=>{
    test('Instantiation quality', ()=>{
        const addressCamila = new Locality ('Pari', 'São Paulo', 'São Paulo')
        //expect(addressCamila).toBeNull
    })
});