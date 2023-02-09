const express = require("express");
const app = express();
app.use(express.json())

const route = require('./routes')
route(app)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`On port ${port}`))