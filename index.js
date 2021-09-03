require('dotenv').config()

const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send('<h1>hello</h1>')
})

server.get('/api', (req, res) => {
  res.json({ messgae: 'hello there' })
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
