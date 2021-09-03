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

// get users
const initializeUsers = () => ([
  { id: 1,name: 'john'},
  { id: 2, name: 'paul'},
  { id: 3, name: 'george'},
  { id: 4, name: 'ringo' }
])

let users = initializeUsers()

const find = () => {
  return Promise.resolve(users)
}

server.get('/api/users', (req, res) => {
  find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({
        messgae: 'error getting users',
        err: err.messgae,
      })
    })
})

server.use('*', (req, res) => {
  res.status(404).json({
    messgae: 'not found'
  })
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
