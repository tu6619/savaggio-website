'use strict'
// import node modules
const Hapi = require('hapi')

const port = process.env.PORT || 8000

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: port
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('hello')
  }
})

module.exports = server
