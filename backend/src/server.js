require('dotenv').config()

const app = require('./app')
const connectDatabase = require('./config/database')

const port = process.env.PORT || 5000

async function startServer() {
  try {
    await connectDatabase()
  } catch (error) {
    console.error(
      'Database connection failed. The NoteNest API server will not start.',
      error,
    )
    process.exit(1)
  }

  app.listen(
    port,
    () => {
      console.log(`NoteNest API is listening on port ${port}`)
    },
  )
}

startServer()
