var Conversion = require('transformer-conversion');
var tJsDate = require('transformer.js-date');
var tUnixTime = require('transformer.unix-time');
// require any other modules you may need here.

module.exports = Conversion(tJsDate, tUnixTime, convert);

function convert(jsDate) {
  return jsDate.getTime() / 1000.0; // Date uses ms, not s.
}
