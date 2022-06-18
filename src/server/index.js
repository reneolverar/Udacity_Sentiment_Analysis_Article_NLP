var path = require('path')

// Use express
const express = require('express')
const app = express()
app.use(express.static('dist'))

// Use Cors for cross origin allowance (enable ALL CORS requests)
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('/dist/index.html')
})

// Use environment variables for API_Key:
const dotenv = require('dotenv')
dotenv.config()
app.get('/apiKey', function (req, res) {
    res.send(process.env.API_KEY)
})

module.exports = app;