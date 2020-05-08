const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT;

const initLogger = require('../utils/logger/winston');
const logger = initLogger(`${__dirname}`, "messaging");
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Messaging service -  http://localhost:${port}`));