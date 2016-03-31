'use strict'
// import node modules
const Hapi = require('hapi')
const Vision = require('vision')
const Handlebars = require('handlebars')
const Inert = require('inert')

const server = new Hapi.Server()
const port = process.env.PORT || 8000

// require plugins
const homePlugin = require('./homePlugin.js')

const plugins = [Vision, Inert, homePlugin]

server.connection({
  host: 'localhost',
  port: port
})

server.register(plugins, (err) => {
  if (err) throw err

  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname,
    path: '../views',
    layout: 'default',
    layoutPath: '../views/layout'
  })
})
server.route({
  method: 'GET',
  path: '/public/{param*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
})

module.exports = server
