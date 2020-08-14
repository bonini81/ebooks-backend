const Libros = require('../models/Libros');

module.exports = {
    create: (body)=> Libros.create(body),
    find: () => Libros.find()
}




