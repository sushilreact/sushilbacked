require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('This is myname')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on portfs ${process.env.PORT}`)
})