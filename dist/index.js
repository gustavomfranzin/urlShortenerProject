"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URL_Controller_1 = require("./controller/URL.Controller");
const mongoConnection_1 = require("./database/mongoConnection");
const express = require('express');
const cors = require('cors');
const api = express();
api.use(express.json());
api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    api.use(cors());
    next();
});
const database = new mongoConnection_1.MongoConnection();
database.connect();
const urlController = new URL_Controller_1.URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(5000, () => console.log('Express Listening with Cors Enable'));
//# sourceMappingURL=index.js.map