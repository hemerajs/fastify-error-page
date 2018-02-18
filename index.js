'use strict'

const fp = require('fastify-plugin')
const Youch = require('youch')

function fastifyErrorPage(fastify, options, next) {
  fastify.setErrorHandler((err, req, reply) => {
    try {
      const youch = new Youch(err, reply.request.req)
      youch.toHTML().then(html => {
        reply.type('text/html')
        reply.send(html)
      })
    } catch (err) {
      reply.send(err)
    }
  })

  next()
}

module.exports = fp(fastifyErrorPage, '>=0.43.0 || >=1.0.0-rc.2')
