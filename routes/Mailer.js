const express = require('express')
const router = express.Router()
const Mailer = require('../controllers/Mailer')
const { check } = require('express-validator')
 
router.post('/',
 
    Mailer.mailer
)
 
module.exports = router

