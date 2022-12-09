"use strict";

const { faker } = require("@faker-js/faker");
//const { v4: uuidv4 } = require("uuid");

const Guardian = require("../service/guardian/guardian");
const createGuardian = require("../controller/guardianController");

const nameValue = faker.internet.userName();
const emailValue = faker.internet.email();
const passwordValue = faker.internet.password();
const descriptionValue = faker.lorem.lines(2); 

function mockGuardians () {
    for (let i = 0; i < 10; i++){
    createGuardian(nameValue, emailValue, passwordValue, descriptionValue)}
};
console.log(mockGuardians())
console.log(Guardian.guardians);
