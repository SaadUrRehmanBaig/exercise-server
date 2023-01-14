const Router = require("express").Router();
const controller = require('./controller')

Router.post('/',controller.post )
Router.get('/', controller.get)
Router.put('/:id',controller.put)
Router.delete('/:id', controller.del)

module.exports = Router