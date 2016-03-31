const test = require('tape')
const server = require('../lib/server.js')

// test that the correct route is hit

test('correct route is hit', (t) => {
  const options = {
    url: '/',
    method: 'GET'
  }
  server.inject(options, (response) => {
    t.equal(response.request.route.path, '/', 'homepage is hit')
    t.end()
  })
})
