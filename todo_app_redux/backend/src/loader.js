// server
const server = require('./config/server')

// database
require('./config/database')

// router
require('./config/routes')(server)