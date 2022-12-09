const Babysitter = require("../service/babysitter/babysitter");
const Guardian = require("../service/guardian/guardian");

function createBabysitter(name, email, password, description, period_price, quantity_children){
  const newBabysitter = new Babysitter(name, email, password, description, period_price, quantity_children);
  Babysitter.babysitters.push(newBabysitter);
  return `New user successfully created`;
};

module.exports = createBabysitter;
