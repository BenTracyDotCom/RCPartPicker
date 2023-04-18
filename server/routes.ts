const router = require('express').Router()
const db = require('../db')

router.post('/register', db.controllers.register);

router.post('/parts', db.controllers.addPart);

module.exports = router