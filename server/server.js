require('dotenv').config();
const express = require('express');
const formData = require('express-form-data');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
app.listen( PORT, console.log("Server is runnning"));

app.use(express.json());
app.use(formData.parse());
app.use(cors( { origin: ["http://localhost:5173"] } ))
