'use strict'

const fastify = require('fastify')()
const plugin = require('.')

fastify.register(plugin)

fastify.get('/', async function (req, reply) {
  throw new Error('Opppps!')
})

fastify.listen(3000, (err) => {
  if (err) throw err
  console.log('Server listenting on localhost:', fastify.server.address().port)
})
