const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3001
require('dotenv').config()

const mainCtrl = require('./mainCtrl.js')

const app = express()

app.use(json())
app.use(cors())

// app.get('/', (req, res) => {
//   res.send(process.env.PORT)
// })

app.get('/api/parks/:id', mainCtrl.getParkByState)
app.get('/api/alerts/:code', mainCtrl.getAlerts)


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
