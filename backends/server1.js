const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/api/v1/ping', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Pong from server 1'
  })
})

const PORT = 5001

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
