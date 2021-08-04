const express = require('express')
require('dotenv').config()
const app = express()
const port = 3005
const IP_SERVER = process.env.IP_SERVER;

app.get('/', (req, res) => {
  res.send(`Hello World from ${IP_SERVER}, Alicia añade un cambio para probar de nuevo!`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
