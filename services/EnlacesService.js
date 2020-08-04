const Enlaces = require('../models/Enlaces');

module.exports = {
    create: (body)=> Enlaces.create(body),
    find: () => Enlaces.find()
}




