"use strict";

const { faker } = require("@faker-js/faker");
//const { v4: uuidv4 } = require("uuid");

const Locality = require("../service/locality/locality");
const localityControllet = require("../controller/localityController");

function mockLocality() {
  for (let i = 0; i < 10; i++) {
    let neighborhoodValue = faker.address.direction();
    let cityNameValue = faker.address.cityName();
    let stateValue = faker.address.state();
    
    localityControllet.createLocality(
        neighborhoodValue,
        cityNameValue,
        stateValue
    );
  }
};

//mockLocality();
//console.log(Locality.localitys);

module.exports = { mockLocality };
