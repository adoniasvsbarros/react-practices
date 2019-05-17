const express = require('express')

module.exports = function(server){
    // define base URL for all routes
    const router = express.Router()
    server.use('/api', router)

    // billingCycle routes mapping
    const billingCycle = require('../api/billingCycle/billingCycleService')
    // register all webservices rest inside /billingCycles route
    billingCycle.register(router, '/billingCycles')

}