const express = require("express");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const createError = require("http-errors");
const path = require("path");
const cors = require("cors");

// settings
const app = express();
const port = process.env.PORT || 9000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use('/api/mailer', require('./routes/Mailer'))


// server listening
app.listen(port, () => console.log("Server listening to", port));

//

 
