const mongoose = require('mongoose')

function getHealth(_request, response) {
  response.status(200).json({ status: 'ok', message: 'NoteNest API is healthy' })
}

function getDatabaseReadiness(_request, response) {
  const isConnected = mongoose.connection.readyState === 1

  response.status(isConnected ? 200 : 503).json({
    status: isConnected ? 'ready' : 'not_ready',
    database: isConnected ? 'connected' : 'disconnected',
  })
}

module.exports = { getHealth, getDatabaseReadiness }
