class Address {
    constructor(streetNumber, street, neighborhood, cityName, state){
        this.streetNumber = streetNumber
        this.street = street
        this.neighborhood = neighborhood
        this.cityName = cityName
        this.state = state
    };
    

};

//const address1 = new Address (124, 'Rue du Riverdu', 'Ar 1', 'Paris', 'CDG');
//console.log(address1);

module.exports = Address;
