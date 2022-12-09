'use strict';

const {faker} = require('@faker-js/faker');

const { v4: uuidv4 } = require('uuid');

const Guardian = require("../service/guardian/guardian");

const mockGuardians = [];

function createRandomGuardians() {
  for (let i = 0; i < 10; i++)
    return {
     // guardianId: faker.datatype.uuid(),
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      description: faker.lorem.lines(2),
    };
}

Array.from({ length: 10 }).forEach(() => {
  mockGuardians.push(createRandomGuardians());
});

module.exports = mockGuardians;
