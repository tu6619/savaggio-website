'use strict'

const server = require('./server.js')

server.start((err) => {
  if (err) throw err
  console.log(server.info.port)
  console.log('server started')
})
