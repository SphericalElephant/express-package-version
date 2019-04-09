'use strict';

const Version = require('./lib/version');
const version = new Version();

module.exports = (req, res, next) => {
  return res.send({version: version.getVersion()}).status(200);
};
