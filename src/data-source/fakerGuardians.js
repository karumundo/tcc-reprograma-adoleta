"use strict";

const { faker } = require("@faker-js/faker");
//const { v4: uuidv4 } = require("uuid");

const Guardian = require("../service/guardian/guardian");
const guardianController = require("../controller/guardianController/guardianController");

function mockGuardians() {
  for (let i = 0; i < 10; i++) {
    let nameValue = faker.internet.userName();
    let emailValue = faker.internet.email();
    let passwordValue = faker.internet.password();
    let descriptionValue = faker.lorem.lines(2);
    let quantity_childrenValue = faker.random.numeric(1);
    
    guardianController.createGuardian(
      nameValue,
      emailValue,
      passwordValue,
      descriptionValue,
      quantity_childrenValue
    );
  }
};

module.exports = { mockGuardians };
