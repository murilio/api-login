const express = require('express')
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')

const routes = express.Router()

// products
routes.post('/products', ProductController.store)
routes.get('/products', ProductController.index)

// users
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

module.exports = routes
