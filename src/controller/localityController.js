const Locality = require("../service/locality/locality");

function createLocality(neighborhood, cityName, state) {
  const newLocality = new Locality(neighborhood, cityName, state);
  Locality.localitys.push(newLocality);
  return `Locality successfully registered`;
};

function getLocality(neighborhood) {
  return Locality.localitys.find((n) => {
    return n.neighborhood === neighborhood;
  })
};

function patchLocality(locality) {
  const _getLocality = getLocality(locality.neighborhood);
  _getLocality.neighborhood = locality.neighborhood;
  _getLocality.cityName = locality.cityName;
  _getLocality.state = locality.state;
  return _getLocality;
};

function deleteLocality(locality) {
  const index = Locality.localitys.indexOf(locality);
  Locality.localitys.splice(index, 1);
  return `Locality successfully delete`;
};

module.exports = { createLocality, getLocality, patchLocality, deleteLocality };
