exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/',
    config: {
      handler: (request, reply) => {
        reply()
      }
    }
  })
  next()
}

exports.register.attributes = {
  name: 'homePlugin'
}
