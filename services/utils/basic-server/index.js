const express = require('express');

const initLogger = require('../logger/winston');

const basicServer = (serviceName, logFile) => {
  const logger = initLogger(serviceName, logFile);
  const app = express();

  return {
    logger, app
  };

};
module.exports = basicServer;
