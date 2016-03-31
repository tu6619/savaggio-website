const test = require('tape')
const server = require('../lib/server.js')

test('server exists', (t) => {
  t.ok(Object.keys(server).length > 0, 'server exists')
  t.end()
})

test('server should get a 200 response', (t) => {
  const options = {
    url: '/',
    method: 'GET'
  }
  server.inject(options, (response) => {
    t.equal(response.statusCode, 200, 'request successful')
    t.end()
  })
})
