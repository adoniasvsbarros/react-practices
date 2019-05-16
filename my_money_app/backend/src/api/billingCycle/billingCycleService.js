const billingCycle = require ('./billingCycle')

billingCycle.methods(['get', 'post', 'put', 'delete']) // creating restful webservices
billingCycle.updateOptions({new: true, runValidators: true}) // guarantee service returns updated object, and run validators on put

module.exports = billingCycle