"use strict";

const { faker } = require("@faker-js/faker");
//const { v4: uuidv4 } = require("uuid");

const Babysitter = require("../service/babysitter/babysitter");
const babysitterControler = require("../controller/babysitterController");

function mockBabysitters() {
  for (let i = 0; i < 10; i++) {
    let nameValue = faker.internet.userName();
    let emailValue = faker.internet.email();
    let passwordValue = faker.internet.password();
    let descriptionValue = faker.lorem.lines(2);
    let period_priceValue = faker.random.numeric(2);
    let quantity_childrenValue = faker.random.numeric(1);

    babysitterControler.createBabysitter(
      nameValue,
      emailValue,
      passwordValue,
      descriptionValue,
      period_priceValue,
      quantity_childrenValue
    );
  }
};

module.exports = {mockBabysitters};
