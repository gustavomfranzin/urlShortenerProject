import express from 'express'
import { URLController } from './controller/URL.Controller'
import { MongoConnection } from './database/mongoConnection'

const express = require('express')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use((req, res, next) => {
    //console.log("acessou o middleware")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    api.use(cors());
    next();
})

const database = new MongoConnection()
database.connect()

const urlController = new URLController()

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express Listening with Cors Enable'))

