const express = require('express')
const app = express()
const route = require('./src/routes');
route(app);
app.listen(process.env.PORT || 3000)